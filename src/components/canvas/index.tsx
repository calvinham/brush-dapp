import React, { useState } from 'react';
import { ColorPicker } from '../color-picker';
import { Grid } from '../grid';
import styles from './index.module.scss';

export const Canvas = () => {
  const [color, setColor] = useState<string>('#ffffff');
  const [hex, setHex] = useState<string>('#ffffff');

  return (
    <div className={styles.container}>
      <div className={styles.canvasContainer}>
        <Grid hex={color} />
      </div>
      <div className={styles.pickerContainer}>
        <ColorPicker hex={hex} setHex={setHex} />
      </div>
    </div>
  );
};
