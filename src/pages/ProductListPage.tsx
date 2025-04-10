import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';
import { setProduct } from '../features/checkout/checkoutSlice';
import { useState } from 'react';

export default function ProductListPage() {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cart, setCart] = useState<{ [id: number]: number }>({});

  const handleBuy = (id: number) => {
    dispatch(setProduct({ id }));
    navigate('/checkout');
  };

  const handleAddToCart = (id: number) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <div className="container py-4 content-center">
      <h1 className="text-center mb-4 d-flex align-items-center justify-content-center">
        <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="shop" width="40" className="me-2" />
         Shop Products
      </h1>

      <div className="row justify-content-center">
        {products.map(product => (
          <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
            <div className="card-custom w-100">
              <img src={`https://via.placeholder.com/150?text=${encodeURIComponent(product.name)}`} alt={product.name} />
              <h5>{product.name}</h5>
              <p className="text-muted">{product.description}</p>
              <p><strong>${product.price}</strong></p>
              <button className="btn-cart" onClick={() => handleAddToCart(product.id)}>
                ➕ Agregar al carrito ({cart[product.id] || 0})
              </button>
              <button className="btn-buy mt-2" onClick={() => handleBuy(product.id)}>
                🛒 Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}