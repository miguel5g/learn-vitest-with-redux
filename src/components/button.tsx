interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="flex items-center justify-center bg-violet-500 text-violet-100 rounded-md px-4 py-2 transition hover:bg-violet-600"
      {...rest}
    >
      {children}
    </button>
  );
};