import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export function NotFound() {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(decrementTimer, 1000);

    // Função de limpeza que será executada quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  const decrementTimer = () => {
    setTimer((oldValue) => oldValue - 1);
  };

  if (timer <= 0) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex items-center justify-center h-screen-header flex-col">
      <h1 className="text-8xl font-bold">404</h1>
      <h2 className="text-xl font-semibold">Página não encontrada!</h2>
      <p className="font-semibold text-xl mt-1 mb-4">
        Você será redirecionado para a Home em:{' '}
        <span className="text-red-600">0{timer}</span>
      </p>
    </div>
  );
}
