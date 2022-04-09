import { createEffect, createEvent, createStore, sample } from 'effector';
import { cartAPI, CartItem } from 'shared/api';

const $cartItems = createStore<Array<CartItem>>([]);

const getCartItems = createEvent();
const getCartItemsFx = createEffect(async () => {
  return cartAPI.getCartItems();
});

sample({
  clock: getCartItems,
  target: getCartItemsFx,
});

sample({
  clock: getCartItemsFx.doneData,
  target: $cartItems,
});

const addItemById = createEvent<string>();

sample({
  clock: addItemById,
  source: $cartItems,
  filter: (items, itemId) => !items.find((item) => item.id === itemId),
  fn: (cartItems, id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      item.count += 1;
      return [...cartItems.filter((item) => item.id !== id), item];
    }
    return [...cartItems];
  },
  target: $cartItems,
});

const remItemById = createEvent<string>();

sample({
  clock: remItemById,
  source: $cartItems,
  filter: (items, itemId) => !items.find((item) => item.id === itemId),
  fn: (cartItems, id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      item.count -= 1;
      return [...cartItems.filter((item) => item.id !== id), item];
    }
    return [...cartItems];
  },
  target: $cartItems,
});
