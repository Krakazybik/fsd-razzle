export interface CartItem {
  id: string;
  name: string;
  cost: number;
}

const mockCartItems: Array<CartItem> = [
  { id: '00012', name: 'Puzzle', cost: 5.99 },
];

export const cartAPI = {
  getCartItems: (): Promise<Array<CartItem>> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockCartItems), 1000);
    });
  },
};
