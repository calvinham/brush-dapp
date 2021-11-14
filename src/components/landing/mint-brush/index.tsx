import React, { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setBrush } from '../../../action/appActions';
import { ContractService } from '../../../service/contract';
import { sleep } from '../../../util';
import mintBrushImage from '../../../assets/temp_brush_img.png';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/private-theming';
import { selectBrushId } from '../../../state/reducers/selectors';

export const LandingBrushModal = () => {
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const brush = useSelector(selectBrushId);

  const dispatch = useDispatch();

  // change this later
  const handleOnClick = async () => {
    setIsMinting(true);
    const result = await ContractService.mintUserBrush();
    const brushId = result !== '' ? '123' : '';
    dispatch(setBrush(brushId));
    setIsMinting(false);

    if (brushId === '') {
      setErrorMessage('error minting brush');
    }
  };

  const handleChangeErrorMessage = async () => {
    await sleep(2000);
    setErrorMessage('');
  };

  const brushText = brush !== '' ? `brush# ${brush}` : 'mint';

  const renderTextContainer = () =>
    brush !== '' ? (
      <div className={styles.textContainer}>
        <div className={styles.brushTitle}>Genesis Brush</div>
      </div>
    ) : (
      <div className={styles.textContainer}>
        <div className={styles.title}>mint a brush</div>
        <div className={styles.subTitle}>you can only mint 1!</div>
      </div>
    );

  useEffect(() => {
    if (errorMessage !== '') {
      handleChangeErrorMessage();
    }
  }, [errorMessage]);

  return (
    <div className={styles.container}>
      {renderTextContainer()}

      <div className={styles.brushImgContainer}>
        <img
          src={mintBrushImage}
          alt="genesis brush - brush"
          className={styles.brushImg}
        />
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button} onClick={handleOnClick}>
          {isMinting ? (
            <div className={styles.loaderContainer}>
              <Loader />
            </div>
          ) : (
            <div className={styles.buttonText}>{brushText}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Loader: FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
    },
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={theme}>
        <CircularProgress color="primary" />
      </ThemeProvider>
    </Box>
  );
};
