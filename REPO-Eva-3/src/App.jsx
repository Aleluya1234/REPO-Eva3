import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Gestion from './pages/Gestion';
import ProductosAPI from './pages/ProductosAPI';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/gestion" element={<Gestion />} />
            <Route path="/productos" element={<ProductosAPI />} />
          </Routes>
        </main>
        <footer>
          <p>© 2026 Tienda de Mascotas - Benjamin Nahuelhuaique</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;