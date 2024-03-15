import { Link } from 'react-router-dom';
import { Movie } from '../../types/movies';

type CardFilmeProps = {
  movie: Movie;
};

export function CardFilme({ movie }: CardFilmeProps) {
  return (
    <article
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 rounded-md flex justify-center items-center flex-col box-border px-3"
      key={movie.id}
    >
      <strong className="mb-4 text-center text-lg ">{movie.title}</strong>
      <img
        className="w-5/6 h-96 object-cover block rounded-t-lg"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <Link
        to={`/filme/${movie.id}`}
        className="w-5/6  flex items-center justify-center py-3 text-2xl bg-customBlue text-white rounded-b-lg"
      >
        {' '}
        Acessar
      </Link>
    </article>
  );
}
