import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

const initialState: Product[] = [
  { id: 1, name: 'Producto A', description: 'Descripción A', price: 30000, stock: 5 },
  { id: 2, name: 'Producto B', description: 'Descripción B', price: 45000, stock: 3 },
  { id: 3, name: 'Producto C', description: 'Descripción A', price: 30000, stock: 5 },
  { id: 4, name: 'Producto D', description: 'Descripción B', price: 45000, stock: 3 },
  { id: 3, name: 'Producto C', description: 'Descripción A', price: 30000, stock: 5 },
  { id: 4, name: 'Producto D', description: 'Descripción B', price: 45000, stock: 3 }
];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateStock: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const product = state.find(p => p.id === action.payload.id);
      if (product) {
        product.stock -= action.payload.quantity;
      }
    }
  }
});

export const { updateStock } = productsSlice.actions;
export default productsSlice.reducer;
