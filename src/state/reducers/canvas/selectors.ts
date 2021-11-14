import { RootState } from '../..';

export const selectCanvasId = (state: RootState) => state.canvas.canvasId;

export const selectNumRows = (state: RootState) => state.canvas.rows;

export const selectNumCols = (state: RootState) => state.canvas.columns;

export const selectedPixel = (state: RootState) => state.canvas.selectedPixel;

export const selectAllPixels = (state: RootState) => state.canvas.pixels;
