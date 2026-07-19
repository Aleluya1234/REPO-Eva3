function Inicio() {
  return (
    <div className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
        Bienvenido a Tienda Mascotas
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
        Tu plataforma confiable para gestionar pedidos de productos para mascotas.
      </p>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        flexWrap: 'wrap',
        marginTop: '20px'
      }}>
        <div style={{ 
          background: '#e8f4fd', 
          padding: '20px', 
          borderRadius: '12px', 
          width: '200px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ margin: '0 0 8px 0' }}>📦 Pedidos</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>
            Registra, edita y elimina pedidos fácilmente.
          </p>
        </div>

        <div style={{ 
          background: '#fef9e7', 
          padding: '20px', 
          borderRadius: '12px', 
          width: '200px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ margin: '0 0 8px 0' }}>🐾 Productos</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>
            Consulta el catálogo desde nuestra API externa.
          </p>
        </div>

        <div style={{ 
          background: '#eafaf1', 
          padding: '20px', 
          borderRadius: '12px', 
          width: '200px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ margin: '0 0 8px 0' }}>💾 Persistencia</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>
            Tus pedidos se guardan automáticamente en el navegador.
          </p>
        </div>
      </div>

      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        background: '#f8f9fa', 
        borderRadius: '12px',
        border: '1px solid #e0e0e0'
      }}>
        <p style={{ margin: '5px 0' }}>
          <strong>👨‍🎓 Alumno:</strong> Benjamin Elias Nahuelhuaique Chacon
        </p>
        <p style={{ margin: '5px 0' }}>
          <strong>📚 Sección:</strong> C1
        </p>
        <p style={{ margin: '5px 0' }}>
          <strong>📝 Tema:</strong> Tienda de mascotas
        </p>
      </div>
    </div>
  );
}

export default Inicio;