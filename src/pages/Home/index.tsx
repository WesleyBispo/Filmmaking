import useListMovies from '../../hooks/useListMovies';
import { ProgressBar } from 'react-loader-spinner';
import { Pagination } from '../../components/Pagination';
import { useState } from 'react';
import { CardFilme } from '../../components/CardFilme';
export function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: movies,
    isLoading,
    isError,
    isPlaceholderData,
    isSuccess,
  } = useListMovies(currentPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center h-screen-header">
          <ProgressBar
            visible={true}
            height="80"
            width="80"
            barColor="#116FEB"
            borderColor="#000"
            ariaLabel="progress-bar-loading"
          />
        </div>
      )}
      {isError && (
        <div className="flex items-center justify-center h-screen-header">
          Erro ao buscar os dados
        </div>
      )}
      {isSuccess && (
        <div className="w-full min-w-80 flex items-center justify-center flex-col">
          <Pagination
            page={currentPage}
            totalPages={100}
            onPageChange={handlePageChange}
            isPlaceHolderData={isPlaceholderData}
          ></Pagination>
          <div className="w-full m-4 flex flex-wrap justify-center">
            {movies?.results.map((movie) => <CardFilme movie={movie} />)}
          </div>
        </div>
      )}
    </>
  );
}
