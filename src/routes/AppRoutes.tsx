import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListPage from '../pages/ProductListPage';
import CheckoutPage from '../pages/CheckoutPage';
import SummaryPage from '../pages/SummaryPage';
import ResultPage from '../pages/ResultPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}