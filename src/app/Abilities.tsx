import React from 'react';

function Abilities(props: { abilities: any; setAbilities: any; }) {
  const { abilities, setAbilities } = props;

  const handleAbilityChange = (index:number, event) => {
    const newAbilities = [...abilities];
    newAbilities[index] = event.target.value;
    setAbilities(newAbilities);
  };

  const handleAddAbility = (event) => {
    event.preventDefault();
    const newAbilities = [...abilities, ''];
    setAbilities(newAbilities);

  };

  const handleRemoveAbility = (index:number, event) => {
    event.preventDefault();
    const newAbilities = [...abilities];
    newAbilities.splice(index, 1);
    setAbilities(newAbilities);
  };

  return (
    <div>
      <label htmlFor="abilities-input">Vaardigheden:</label>
      {abilities.map((ability: string, index: number) => (
        <div key={index}>
          <input
            id={`ability-${index}`}
            type="text"
            value={ability}
            onChange={(event) => handleAbilityChange(index, event)}
          />
          <button onClick={() => handleRemoveAbility(index, event)}>Verwijderen</button>
        </div>
      ))}
      <button onClick={handleAddAbility}>Toevoegen</button>
    </div>
  );
}

export default Abilities;
