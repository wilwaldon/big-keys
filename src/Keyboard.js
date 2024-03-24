import React, { useState } from 'react';

const Key = ({ label, onPress, extraClasses = '' }) => {
  const baseKeyClasses = `
    border border-gray-300
    flex justify-center items-center
    text-2xl
    m-1
    bg-white hover:bg-gray-100
    shadow-md
    rounded
    cursor-pointer
    transition-colors duration-150
  `;

  // Combine base classes with any extra classes passed in
  const keyClasses = `${baseKeyClasses} ${extraClasses}`;

  return (
    <button className={keyClasses} onClick={() => onPress(label)}>
      {label}
    </button>
  );
};

const Keyboard = () => {
  const keyboardRows = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '?'],
    ['Space']  // Adding a row for the space bar
  ];
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (key) => {
    // Append a space for the space bar, otherwise append the key itself
    const valueToAdd = key === 'Space' ? ' ' : key;
    setInputValue(prevValue => prevValue + valueToAdd);
  };

  return (
    <div className="flex flex-col items-center p-5">
      <div
        className="text-2xl mb-4 p-2 w-full max-w-2xl border border-gray-300"
        style={{ minHeight: '4.5rem' }}
      >
        {inputValue}
      </div>
      {keyboardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center">
          {row.map((key) => (
            <Key
              key={key}
              label={key}
              onPress={handleKeyPress}
              extraClasses={key === 'Space' ? 'w-96 h-12' : 'w-12 h-12'} // Customize the space bar's width and height
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
