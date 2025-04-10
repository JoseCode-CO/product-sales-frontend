import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProduct } from '../features/checkout/checkoutSlice';
import { RootState } from '../store';

export default function ProductListPage() {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuy = (id: number) => {
    dispatch(setProduct({ id }));
    navigate('/checkout');
  };

  return (
    <div>
      <h1>Productos Disponibles</h1>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid gray', margin: 10, padding: 10 }}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <button onClick={() => handleBuy(product.id)}>Comprar</button>
        </div>
      ))}
    </div>
  );
}