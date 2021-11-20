import React from 'react';
import styles from './index.module.scss';

interface Props {
  color: string;
  setColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ColorPicker = (props: Props) => {
  return (
    <input
      type="color"
      className={styles.colorPicker}
      value={props.color}
      onChange={props.setColor}
    />
  );
};
