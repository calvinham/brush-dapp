import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../header';
import { Landing } from '../landing';
import styles from './index.module.scss';
import { debounce } from '../../util/debounce';
import { useDispatch } from 'react-redux';
import { Canvas } from '../canvas';

const App = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const [shouldScroll, setShouldScroll] = useState<boolean>(false);
  const handleToggleShouldScroll = () => {
    setShouldScroll(false);
  };

  const debouncedSetShouldScroll = debounce(handleToggleShouldScroll, 500);

  const executeScroll = () => {
    if (canvasRef.current && shouldScroll) {
      canvasRef.current.scrollIntoView({ behavior: 'smooth' });
      debouncedSetShouldScroll();
    }
  };

  useEffect(() => {
    if (shouldScroll) {
      executeScroll();
    }
  }, [shouldScroll]);

  return (
    <div className={styles.appContainer}>
      <Header />
      <Landing shouldScroll={shouldScroll} setShouldScroll={setShouldScroll} />

      <div ref={canvasRef} className={styles.canvasContainer}>
        <Canvas />
      </div>
    </div>
  );
};

export default App;
