import { useState, useEffect } from 'react';
import FormularioPedido from '../components/FormularioPedido';
import ListaPedidos from '../components/ListaPedidos';

function Gestion() {
  const [pedidos, setPedidos] = useState([]);
  const [pedidoEditando, setPedidoEditando] = useState(null);

  // Cargar pedidos desde LocalStorage al iniciar
  useEffect(() => {
    const pedidosGuardados = localStorage.getItem('pedidos');
    if (pedidosGuardados) {
      setPedidos(JSON.parse(pedidosGuardados));
    }
  }, []);

  // Guardar pedidos en LocalStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
  }, [pedidos]);

  // Agregar nuevo pedido
  const agregarPedido = (nuevoPedido) => {
    const pedidoConId = {
      ...nuevoPedido,
      id: Date.now()
    };
    setPedidos([...pedidos, pedidoConId]);
  };

  // Actualizar pedido existente
  const actualizarPedido = (pedidoActualizado) => {
    setPedidos(pedidos.map(p => 
      p.id === pedidoActualizado.id ? pedidoActualizado : p
    ));
    setPedidoEditando(null);
  };

  // Eliminar pedido
  const eliminarPedido = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este pedido?')) {
      setPedidos(pedidos.filter(p => p.id !== id));
    }
  };

  // Seleccionar pedido para editar
  const editarPedido = (pedido) => {
    setPedidoEditando(pedido);
  };

  return (
    <div>
      <h2>📦 Gestión de Pedidos</h2>
      
      <div className="card">
        <h3>{pedidoEditando ? '✏️ Editar Pedido' : '➕ Nuevo Pedido'}</h3>
        <FormularioPedido 
          onGuardar={pedidoEditando ? actualizarPedido : agregarPedido}
          pedidoEditando={pedidoEditando}
          onCancelar={() => setPedidoEditando(null)}
        />
      </div>

      <div className="card">
        <h3>📋 Lista de Pedidos ({pedidos.length})</h3>
        <ListaPedidos 
          pedidos={pedidos}
          onEditar={editarPedido}
          onEliminar={eliminarPedido}
        />
      </div>
    </div>
  );
}

export default Gestion;