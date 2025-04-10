import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TransactionState {
  status: 'PENDING' | 'SUCCESS' | 'FAILED' | null;
  transactionId: string | null;
}

const initialState: TransactionState = {
  status: null,
  transactionId: null
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    createTransaction: (state, action: PayloadAction<string>) => {
      state.transactionId = action.payload;
      state.status = 'PENDING';
    },
    updateTransactionStatus: (state, action: PayloadAction<'SUCCESS' | 'FAILED'>) => {
      state.status = action.payload;
    }
  }
});

export const { createTransaction, updateTransactionStatus } = transactionsSlice.actions;
export default transactionsSlice.reducer;