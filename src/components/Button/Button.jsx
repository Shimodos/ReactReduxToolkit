import './Button.css';

function Button() {
  const handleClick = () => {
    console.log('Hello');
  };

  return (
    <button onClick={handleClick} className="button accent">
      Save
    </button>
  );
}

export default Button;
