import React from 'react';

function Notes(props: { notes: string; setNotes: any; }) {
  const { notes, setNotes } = props;

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  return (
    <div>
      <label htmlFor="notes-input">Notes:</label>
      <textarea id="notes-input" value={notes} onChange={handleNotesChange}></textarea>
    </div>
  );
}

export default Notes;
