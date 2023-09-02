import React, {
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useMemo,
} from "react";

import { CartItem } from "@/types/types";

export type CartContextStateType = {
  cartItems: CartItem[];
};

const defaultState: CartContextStateType = {
  cartItems: [],
};

export type CartContextProviderType = [
  CartContextStateType,
  Dispatch<SetStateAction<CartContextStateType>>
];

export const CartContext = React.createContext<CartContextProviderType>([
  { ...defaultState },
  () => {},
]);

export const useCartContext = () => useContext(CartContext);

type Props = {
  children: ReactNode;
};

export const CartContextProvider = ({ children }: Props) => {
  const [state, setState] = useState({
    ...defaultState,
  });

  const value = useMemo(
    () => [state, setState],
    [state]
  ) as CartContextProviderType;

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
