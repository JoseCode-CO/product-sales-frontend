import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CheckoutState {
  productId: number | null;
  quantity: number;
  cardInfo: string;
  address: string;
}

const initialState: CheckoutState = {
  productId: null,
  quantity: 1,
  cardInfo: '',
  address: ''
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<{ id: number }>) => {
      state.productId = action.payload.id;
    },
    setQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
    setCardInfo: (state, action: PayloadAction<string>) => {
      state.cardInfo = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    }
  }
});

export const { setProduct, setQuantity, setCardInfo, setAddress } = checkoutSlice.actions;
export default checkoutSlice.reducer;
