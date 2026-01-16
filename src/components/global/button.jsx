const Button = ({
  title = "",
  className = "",
  type="button",
  onClick,
  children,
  ...props
}) => {
  return (
    <button type={type} className={`btn component-btn ${className}`} onClick={onClick} {...props}>
      {title ? title : children}
    </button>
  );
};

export default Button;

