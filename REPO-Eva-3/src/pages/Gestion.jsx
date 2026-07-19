import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import FormularioPedido from '../components/FormularioPedido';
import ListaPedidos from '../components/ListaPedidos';

function Gestion() {
  const [pedidos, setPedidos] = useLocalStorage('pedidos', []);
  const [pedidoEditando, setPedidoEditando] = useState(null);

  const agregarPedido = (nuevoPedido) => {
    const pedidoConId = {
      ...nuevoPedido,
      id: Date.now()
    };
    setPedidos([...pedidos, pedidoConId]);
  };

  const actualizarPedido = (pedidoActualizado) => {
    setPedidos(pedidos.map(p => 
      p.id === pedidoActualizado.id ? pedidoActualizado : p
    ));
    setPedidoEditando(null);
  };

  const eliminarPedido = (id) => {
    if (window.confirm('¿Estas seguro de eliminar este pedido?')) {
      setPedidos(pedidos.filter(p => p.id !== id));
    }
  };

  const editarPedido = (pedido) => {
    setPedidoEditando(pedido);
  };

  return (
    <div>
      <h2>Gestion de Pedidos</h2>
      
      <div className="card">
        <h3>{pedidoEditando ? 'Editar Pedido' : 'Nuevo Pedido'}</h3>
        <FormularioPedido 
          onGuardar={pedidoEditando ? actualizarPedido : agregarPedido}
          pedidoEditando={pedidoEditando}
          onCancelar={() => setPedidoEditando(null)}
        />
      </div>

      <div className="card">
        <h3>Lista de Pedidos ({pedidos.length})</h3>
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