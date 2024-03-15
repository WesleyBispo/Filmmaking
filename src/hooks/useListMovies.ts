import { useQuery, keepPreviousData } from '@tanstack/react-query';
import api from '../config/axios';
import { ApiMovieResponse } from '../types/movies';

const urlMovies = 'discover/movie';

// Hook personalizado para buscar os filmes
const useListMovies = (page: number) => {
  const fetchMovies = async (): Promise<ApiMovieResponse> => {
    const { data } = await api.get<ApiMovieResponse>(urlMovies, {
      params: {
        include_adult: false,
        include_video: false,
        language: 'pt-BR',
        page: page,
        sort_by: 'popularity.desc',
      },
    });
    return data;
  };

  return useQuery({
    queryKey: ['movies', page],
    queryFn: () => fetchMovies(),
    staleTime: 1000 * 10 * 2,
    placeholderData: keepPreviousData,
  });
};

export default useListMovies;
