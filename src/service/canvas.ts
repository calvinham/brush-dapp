import { Pixel } from '../components/model/interface/pixel';
import { sleep } from '../util';

const CANVASMOCKDATA = {
  canvasId: 3,
  canvasRows: 4,
  canvasCols: 4,
};

interface CurrentCanvasInfo {
  canvasId: number;
  canvasRows: number;
  canvasCols: number;
}

const fetchCurrentCanvasData = async (): Promise<CurrentCanvasInfo> => {
  await sleep(500);
  return CANVASMOCKDATA;
};

const fetchTakenCanvasPositions = async () => {};

export const CanvasService = {
  fetchCurrentCanvasData,
};
