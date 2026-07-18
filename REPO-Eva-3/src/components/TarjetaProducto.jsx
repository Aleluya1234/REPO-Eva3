function TarjetaProducto({ producto }) {
  return (
    <div className="card" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'transform 0.3s',
      cursor: 'default'
    }}>
      <img 
        src={producto.imagen} 
        alt={producto.nombre}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
        onError={(e) => {
          e.target.src = 'https://placehold.co/400x300?text=Producto';
        }}
      />
      
      <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{producto.nombre}</h3>
      <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
        {producto.descripcion}
      </p>
      <p style={{ fontSize: '14px', marginBottom: '5px' }}>
        <strong>Categoria:</strong> {producto.categoria}
      </p>
      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#2c3e50', marginBottom: '8px' }}>
        ${producto.precio.toLocaleString()}
      </p>
      <p style={{ fontSize: '14px' }}>
        <span style={{
          padding: '4px 8px',
          borderRadius: '4px',
          background: producto.disponible ? '#2ecc71' : '#e74c3c',
          color: 'white',
          fontSize: '12px'
        }}>
          {producto.disponible ? 'Disponible' : 'No disponible'}
        </span>
      </p>
    </div>
  );
}

export default TarjetaProducto;