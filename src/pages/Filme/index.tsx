import { useParams } from 'react-router-dom';

export function Filme() {
  const { id } = useParams();
  return (
    <div>
      <h1>BEM VINDO A FILME {id} </h1>
    </div>
  );
}
