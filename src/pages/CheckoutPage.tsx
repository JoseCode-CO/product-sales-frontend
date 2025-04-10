import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCardInfo, setAddress } from '../features/checkout/checkoutSlice';
import { useState } from 'react';

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [card, setCard] = useState('');
  const [address, setAddr] = useState('');

  const handleNext = () => {
    dispatch(setCardInfo(card));
    dispatch(setAddress(address));
    navigate('/summary');
  };

  return (
    <div>
      <h1>Información de Pago</h1>
      <input placeholder="Tarjeta" value={card} onChange={e => setCard(e.target.value)} /><br />
      <input placeholder="Dirección" value={address} onChange={e => setAddr(e.target.value)} /><br />
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
}