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
