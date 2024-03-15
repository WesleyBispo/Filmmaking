type ButtonProps = {
  children: string;
  onClickFunction?: () => void;
  disabled?: boolean;
};
export function Button({ children, onClickFunction, disabled }: ButtonProps) {
  const buttonClassName = `bg-customBlue rounded-md text-white text-sm p-2 sm:text-base hover:scale-105  ${
    disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
  }`;
  return (
    <button
      className={buttonClassName}
      onClick={onClickFunction}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
