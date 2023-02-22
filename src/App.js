import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import FilterPage from './pages/filterPage';
import CardPage from './pages/CardPage';
import ShoppingCart from './pages/ShoppingCart';
import OurWorkPage from './pages/ourWorkPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<FilterPage />} />
        <Route path="/:id" element={<CardPage />} />
        <Route path="/card" element={<ShoppingCart />} />
        <Route path="/ourwork" element={<OurWorkPage />} />
      </Route>
    </Routes>
  );
}

export default App;
