const Button = ({ text, click }) => {
  return (
    <button className="bg-blue-600 text-white px-5 rounded-md" onClick={click}>
      {text}
    </button>
  );
};

export default Button;
