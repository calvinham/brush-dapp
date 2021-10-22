import React, { useState } from 'react';
import styles from './index.module.scss';

interface Props {
  hex: string;
}

export interface CellItem {
  state: boolean;
  color: string;
}

export const Grid = (props: Props) => {
  const d = Array.from(
    { length: 25 },
    () =>
      ({
        state: false,
        color: '#ffffff',
      } as CellItem),
  );

  const [cells, setCells] = useState(d);
  const updateCell = (index: number) => () => {
    setCells(
      cells.map((cell: CellItem, cellIndex: number) => {
        if (cellIndex === index) {
          return {
            state: true,
            color: props.hex,
          } as CellItem;
        }
        return cell;
      }),
    );
  };

  return (
    <div className={styles.grid}>
      {cells.map((cellItem: CellItem, index: number) => (
        <div
          key={index}
          style={{ background: cellItem.state ? cellItem.color : '#ffffff' }}
          className={styles.cell}
          onClick={updateCell(index)}
        ></div>
      ))}
    </div>
  );
};
