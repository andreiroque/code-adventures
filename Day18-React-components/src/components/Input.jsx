const Input = ({ text }) => {
  return (
    <input
      type="text"
      className="bg-slate-900 rounded-md p-3 text-white font-mono"
      placeholder={text}
    />
  );
};

export default Input;
