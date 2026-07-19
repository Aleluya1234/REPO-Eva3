import { useState, useEffect } from 'react';

function useLocalStorage(key, valorInicial) {
  // Estado que se inicializa con el valor guardado en LocalStorage o el valor inicial
  const [valor, setValor] = useState(() => {
    try {
      const guardado = localStorage.getItem(key);
      return guardado ? JSON.parse(guardado) : valorInicial;
    } catch (error) {
      console.error('Error al leer LocalStorage:', error);
      return valorInicial;
    }
  });

  // Guardar en LocalStorage cada vez que el valor cambie
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(valor));
    } catch (error) {
      console.error('Error al guardar en LocalStorage:', error);
    }
  }, [key, valor]);

  return [valor, setValor];
}

export default useLocalStorage;