import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          🐾 Tienda Mascotas
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/gestion" className={({ isActive }) => isActive ? 'active' : ''}>
              Gestión de Pedidos
            </NavLink>
          </li>
          <li>
            <NavLink to="/productos" className={({ isActive }) => isActive ? 'active' : ''}>
              Productos API
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;