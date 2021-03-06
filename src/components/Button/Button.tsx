import React from 'react';

interface ButtonProps {
  /**
   * A description of the prop that you seem fit :)
   */
  kind: 'primary' | 'secondary' | 'cancel' | 'dark' | 'gray';
}

const Button: React.FC<ButtonProps> = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <>
      <button type="button" onClick={() => setCounter(c => c + 1)}>
        Increase
      </button>
      <p>{counter}</p>
    </>
  );
};

export default Button;
