import { createGlobalState } from 'react-hooks-global-state';

export type Product = {
   id?: number,
   name?: string,
   price?: number,
   src?: string,
   isFavorite?: boolean
}

const initialState: { products: Array<Product>, favorites: Array<number> } = {
   products: [],
   favorites: []
};
export const { useGlobalState } = createGlobalState(initialState);
