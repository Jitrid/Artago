import React from 'react';

function Name(props: { name: any; setName: any; }) {
  const { name, setName } = props;

  const handleNameChange = (event: { target: { value: any; }; }) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="name-input">Naam:</label>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
    </div>
  );
}

export default Name;
