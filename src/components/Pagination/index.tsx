import { Button } from '../Button';

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isPlaceHolderData: boolean;
};

export function Pagination({
  page,
  totalPages,
  onPageChange,
  isPlaceHolderData,
}: PaginationProps) {
  const handleNextPage = () => {
    const newPage = page + 1;
    if (newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const handlePreviousPage = () => {
    const newPage = page - 1;
    if (newPage >= 1) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="w-full sm:w-3/4 lg:w-2/4 flex justify-between items-center p-3">
      <Button onClickFunction={handlePreviousPage} disabled={page === 1}>
        Página Anterior
      </Button>
      <p className="text-base sm:text-xl font-semibold text-center">
        Página Atual: {page}
      </p>
      <Button
        onClickFunction={handleNextPage}
        disabled={page === totalPages || isPlaceHolderData}
      >
        Próxima Página
      </Button>
    </div>
  );
}
