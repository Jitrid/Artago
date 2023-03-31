import React from 'react';

function StickFigure({ stickFigure, setStickFigure }) {
  const handleHpChange = (bodyPart, hp) => {
    setStickFigure({ ...stickFigure, [bodyPart]: hp });
  };

  return (
    <div className='healthpoints'>
      <h2>Hitpoints (Nederlands?)</h2>
      <div>
        <label htmlFor="head-hp">👱:</label>
        <input
          type="number"
          id="head-hp"
          value={stickFigure.head}
          onChange={(e) => handleHpChange('head', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="torso-hp">❤️:</label>
        <input
          type="number"
          id="torso-hp"
          value={stickFigure.torso}
          onChange={(e) => handleHpChange('torso', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="left-arm-hp">Left 💪:</label>
        <input
          type="number"
          id="left-arm-hp"
          value={stickFigure.leftArm}
          onChange={(e) => handleHpChange('leftArm', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="right-arm-hp">Right 💪:</label>
        <input
          type="number"
          id="right-arm-hp"
          value={stickFigure.rightArm}
          onChange={(e) => handleHpChange('rightArm', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="left-leg-hp">Left 🦵:</label>
        <input
          type="number"
          id="left-leg-hp"
          value={stickFigure.leftLeg}
          onChange={(e) => handleHpChange('leftLeg', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="right-leg-hp">Right 🦵:</label>
        <input
          type="number"
          id="right-leg-hp"
          value={stickFigure.rightLeg}
          onChange={(e) => handleHpChange('rightLeg', e.target.value)}
        />
      </div>
    </div>
  );
}

export default StickFigure;
