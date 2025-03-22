import { createContext } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  amount: number;
  src: string; // Esta propiedad debe estar en todos los objetos de tipo CartItem
};

type CartContextType = {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
};

// ✅ Crear el contexto correctamente
const CartContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;