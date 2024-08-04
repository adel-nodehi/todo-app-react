function Button({ className, color, backgroundColor, onClick, children }) {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{ color, backgroundColor }}
    >
      {children}
    </button>
  );
}

export default Button;
