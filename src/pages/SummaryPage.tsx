import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { createTransaction, updateTransactionStatus } from '../features/transactions/transactionsSlice';
import { updateStock } from '../features/products/productsSlice';
import { RootState } from '../store';

export default function SummaryPage() {
  const { productId } = useSelector((state: RootState) => state.checkout);
  const product = useSelector((state: RootState) => state.products.find(p => p.id === productId));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePay = () => {
    const transactionId = 'txn-' + Math.random().toString(36).substr(2, 9);
    dispatch(createTransaction(transactionId));

    setTimeout(() => {
      dispatch(updateTransactionStatus('SUCCESS'));
      dispatch(updateStock({ id: productId!, quantity: 1 }));
      navigate('/result');
    }, 1000);
  };

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div>
      <h1>Resumen</h1>
      <p>Producto: {product.name}</p>
      <p>Precio: ${product.price}</p>
      <p>Tarifa base: $2000</p>
      <p>Envío: $5000</p>
      <p>Total: ${product.price + 2000 + 5000}</p>
      <button onClick={handlePay}>Pagar</button>
    </div>
  );
}
