import { useState, useEffect } from 'react';
import TarjetaProducto from '../components/TarjetaProducto';

function ProductosAPI() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        setCargando(true);
        const response = await fetch('/api/productos');
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setProductos(data.productos);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProductos([]);
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <div>
      <h2>🛒 Catálogo de Productos</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Productos obtenidos desde la API del profesor
      </p>

      {cargando && (
        <div className="card" style={{ textAlign: 'center' }}>
          <p>⏳ Cargando productos...</p>
        </div>
      )}

      {error && (
        <div className="card" style={{ background: '#fde8e8', border: '1px solid #e74c3c' }}>
          <p style={{ color: '#e74c3c' }}>❌ Error al obtener datos: {error}</p>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Asegúrate que la API esté corriendo en http://127.0.0.1:8000
          </p>
        </div>
      )}

      {!cargando && !error && (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '20px' 
        }}>
          {productos.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductosAPI;