const Button = ({ bg, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${bg} rounded-full px-4 py-2 font-bold uppercase tracking-wide text-white transition-all duration-100 ease-in-out hover:bg-opacity-80 hover:transition-all`}
    >
      {children}
    </button>
  );
};
export default Button;
