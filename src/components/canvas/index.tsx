import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedColor } from '../../action/canvasActions';
import { selectSelectedColor } from '../../state/reducers/canvas/selectors';
import { ColorPicker } from '../color-picker';
import { Grid } from '../grid';
import styles from './index.module.scss';

export const Canvas = () => {
  const pickerColor = useSelector(selectSelectedColor);
  const dispatch = useDispatch();

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedColor(e.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.canvasContainer}>
        <Grid hex={pickerColor} />
      </div>
      <div className={styles.pickerContainer}>
        <ColorPicker color={pickerColor} setColor={handleColorChange} />
      </div>
    </div>
  );
};
