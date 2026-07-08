// src/data/cartItems.ts
export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export const cartItems: CartItem[] = [
  { id: 1, name: "Keyboard", price: 75, quantity: 1 },
  { id: 2, name: "Mouse", price: 25, quantity: 2 },
  { id: 3, name: "Monitor", price: 250, quantity: 1 }
];