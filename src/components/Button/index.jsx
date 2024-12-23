const Button = ({ label, onClick, id }) => {
  return (
    <button className="button-container" id={id} onClick={onClick} type="button">
      {label}
    </button>
  );
};

export default Button;