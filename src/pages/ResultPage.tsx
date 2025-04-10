import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';

export default function ResultPage() {
  const status = useSelector((state: RootState) => state.transactions.status);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Resultado de la Transacción</h1>
      {status === 'SUCCESS' ? <p>Pago exitoso 🎉</p> : <p>Pago fallido ❌</p>}
      <button onClick={() => navigate('/')}>Volver</button>
    </div>
  );
}
