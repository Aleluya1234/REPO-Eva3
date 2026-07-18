function ListaPedidos({ pedidos, onEditar, onEliminar }) {
  if (pedidos.length === 0) {
    return <p style={{ color: '#666' }}>No hay pedidos registrados.</p>;
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Cliente</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Producto</th>
            <th style={{ padding: '10px', textAlign: 'center' }}>Cantidad</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Fecha</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Estado</th>
            <th style={{ padding: '10px', textAlign: 'center' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}>{pedido.cliente}</td>
              <td style={{ padding: '10px' }}>{pedido.producto}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{pedido.cantidad}</td>
              <td style={{ padding: '10px' }}>{pedido.fecha}</td>
              <td style={{ padding: '10px' }}>
                <span style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  background: pedido.estado === 'Entregado' ? '#2ecc71' :
                             pedido.estado === 'Enviado' ? '#3498db' :
                             pedido.estado === 'Procesado' ? '#f39c12' : '#e74c3c',
                  color: 'white',
                  fontSize: '12px'
                }}>
                  {pedido.estado}
                </span>
              </td>
              <td style={{ padding: '10px', textAlign: 'center' }}>
                <button 
                  className="btn" 
                  onClick={() => onEditar(pedido)}
                  style={{ marginRight: '5px', padding: '5px 10px', fontSize: '12px' }}
                >
                  Editar
                </button>
                <button 
                  className="btn btn-danger" 
                  onClick={() => onEliminar(pedido.id)}
                  style={{ padding: '5px 10px', fontSize: '12px' }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaPedidos;