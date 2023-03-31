import React from 'react';
import Name from './Name';
import Abilities from './Abilities';
import StickFigure from './StickHP';
import Notes from './Notes';

export function Sheet () {
    const [name, setName] = React.useState<string>(''); // React.useState is a hook
    const [abilities, setAbilities] = React.useState<string[]>([]); // React.useState is a hook
    const [items, setItems] = React.useState<string[]>([]); // React.useState is a hook
    const [stickFigure, setStickFigure] = React.useState<string[]>([]); // React.useState is a hook
    const [notes, setNotes] = React.useState<string>(''); // React.useState is a hook


    // Return Constants as an HTML form
    return (
        <div className ="sheetcontainer">
            <header>
            <h1>KarakterKaart</h1>
            <img src="http://artago.nl/wp-content/uploads/2016/09/logo-op-papier.jpg" alt="" />
            </header>
            <form>
            <div className="property-section">
            <Name name={name} setName={setName} />
            <div className='healthpoints-section'>
            <StickFigure stickFigure={stickFigure} setStickFigure={setStickFigure} />
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/1451px-Stick_Figure.svg.png" alt=""/> */}
            </div>
            </div>
            <div className="property-section"> 
            <Abilities abilities={abilities} setAbilities={setAbilities} />
            </div>
           
            <div className="property-section">
            <Notes notes={notes} setNotes={setNotes} />            
            </div>
           
            </form>
        </div>
    );
}