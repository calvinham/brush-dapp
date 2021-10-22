import React, { useState } from 'react';
import { ColorPicker } from '../../components/color-picker';
import { Grid } from '../../components/grid';
import styles from './index.module.scss';

export const Canvas = () => {
  const defaultColor = '#ffffff';
  const [hex, setHex] = useState<string>(defaultColor);

  const handleColorChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setHex(e.target.value);
  };

  return (
    <div className={styles.container}>
      <ColorPicker hex={hex} setHex={handleColorChange} />
      <Grid hex={hex} />
    </div>
  );
};
