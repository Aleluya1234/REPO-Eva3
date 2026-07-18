function Inicio() {
  return (
    <div className="card">
      <h1>🐾 Bienvenido a Tienda de Mascotas</h1>
      <p>Esta aplicación te permite gestionar pedidos de productos para mascotas.</p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>📋 Funcionalidades:</h3>
        <ul style={{ marginLeft: '20px', lineHeight: '2' }}>
          <li>✅ Gestión de pedidos (CRUD con LocalStorage)</li>
          <li>✅ Catálogo de productos desde API externa</li>
          <li>✅ Formulario con validación</li>
          <li>✅ Persistencia de datos al recargar la página</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px', padding: '15px', background: '#e8f4fd', borderRadius: '8px' }}>
        <p><strong>👨‍🎓 Alumno:</strong> Benjamín Elías Nahuelhuaique Chacón</p>
        <p><strong>📚 Sección:</strong> C1</p>
        <p><strong>📝 Tema:</strong> Tienda de mascotas</p>
      </div>
    </div>
  );
}

export default Inicio;