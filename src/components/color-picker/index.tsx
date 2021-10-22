import React, { FC, useState } from 'react';
import styles from './index.module.scss';

interface Props {
  hex: string;
  setHex: any;
}

export const ColorPicker = (props: Props) => {
  const x = '';

  return (
    <input
      type="color"
      className={styles.colorPicker}
      value={props.hex}
      onChange={props.setHex}
    />
  );
};
