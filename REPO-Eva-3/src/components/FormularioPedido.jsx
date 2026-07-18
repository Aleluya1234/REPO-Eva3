import { useState, useEffect } from 'react';

function FormularioPedido({ onGuardar, pedidoEditando, onCancelar }) {
  const [formData, setFormData] = useState({
    cliente: '',
    producto: '',
    cantidad: '',
    fecha: '',
    estado: 'Pendiente'
  });

  const [errores, setErrores] = useState({});

  useEffect(() => {
    if (pedidoEditando) {
      setFormData({
        cliente: pedidoEditando.cliente || '',
        producto: pedidoEditando.producto || '',
        cantidad: pedidoEditando.cantidad || '',
        fecha: pedidoEditando.fecha || '',
        estado: pedidoEditando.estado || 'Pendiente'
      });
    }
  }, [pedidoEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errores[name]) {
      setErrores({
        ...errores,
        [name]: ''
      });
    }
  };

  const validar = () => {
    const nuevosErrores = {};
    
    if (!formData.cliente.trim()) {
      nuevosErrores.cliente = 'El nombre del cliente es obligatorio';
    }
    
    if (!formData.producto.trim()) {
      nuevosErrores.producto = 'El producto es obligatorio';
    }
    
    if (!formData.cantidad || formData.cantidad <= 0) {
      nuevosErrores.cantidad = 'La cantidad debe ser mayor a 0';
    }
    
    if (!formData.fecha) {
      nuevosErrores.fecha = 'La fecha es obligatoria';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validar()) {
      onGuardar(formData);
      if (!pedidoEditando) {
        setFormData({
          cliente: '',
          producto: '',
          cantidad: '',
          fecha: '',
          estado: 'Pendiente'
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Cliente *</label>
        <input
          type="text"
          name="cliente"
          value={formData.cliente}
          onChange={handleChange}
          placeholder="Nombre del cliente"
        />
        {errores.cliente && <span style={{color: 'red', fontSize: '14px'}}>{errores.cliente}</span>}
      </div>

      <div className="form-group">
        <label>Producto *</label>
        <input
          type="text"
          name="producto"
          value={formData.producto}
          onChange={handleChange}
          placeholder="Nombre del producto"
        />
        {errores.producto && <span style={{color: 'red', fontSize: '14px'}}>{errores.producto}</span>}
      </div>

      <div className="form-group">
        <label>Cantidad *</label>
        <input
          type="number"
          name="cantidad"
          value={formData.cantidad}
          onChange={handleChange}
          placeholder="Cantidad"
          min="1"
        />
        {errores.cantidad && <span style={{color: 'red', fontSize: '14px'}}>{errores.cantidad}</span>}
      </div>

      <div className="form-group">
        <label>Fecha *</label>
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
        />
        {errores.fecha && <span style={{color: 'red', fontSize: '14px'}}>{errores.fecha}</span>}
      </div>

      <div className="form-group">
        <label>Estado</label>
        <select
          name="estado"
          value={formData.estado}
          onChange={handleChange}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Procesado">Procesado</option>
          <option value="Enviado">Enviado</option>
          <option value="Entregado">Entregado</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button type="submit" className="btn">
          {pedidoEditando ? 'Actualizar Pedido' : 'Guardar Pedido'}
        </button>
        {pedidoEditando && (
          <button type="button" className="btn btn-danger" onClick={onCancelar}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default FormularioPedido;