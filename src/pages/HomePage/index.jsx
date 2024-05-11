import { useState } from 'react';
import { TShirt } from '../components/TShirt';
import { TShirtSetup } from '../components/TShirtSetup';
import './style.css';

export const HomePage = () => {
  const [typTricka, setTypTricka] = useState('normalLongSleeve');

  const [barvaTricka, setBarvaTricka] = useState('yellow');

  const [printTricka, setPrintTricka] = useState('Ahoj světe');

  const handleChangeTyp = (type) => {
    setTypTricka(type);
  };

  const handleChangeColor = (color) => {
    setBarvaTricka(color);
  };

  const handleChangePrint = (print) => {
    setPrintTricka(print);
  };

  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type={typTricka} color={barvaTricka} print={printTricka} />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup
            onColorChange={handleChangeColor}
            onTypeChange={handleChangeTyp}
            onPrintChange={handleChangePrint}
          />
        </div>
      </div>
    </div>
  );
};
