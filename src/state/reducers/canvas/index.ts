import { createReducer } from '@reduxjs/toolkit';
import {
  setCanvasId,
  setColumns,
  setPixels,
  setRows,
  setSelectedPixel,
} from '../../../action/canvasActions';
import { Pixel } from '../../../components/model/interface/pixel';

export interface CanvasState {
  canvasId: string;
  pixels: Pixel[];
  loading: number;
  rows: number;
  columns: number;
  selectedPixel: Pixel;
}

const initialState: CanvasState = {
  canvasId: '',
  pixels: [],
  loading: 0,
  rows: 0,
  columns: 0,
  selectedPixel: {
    row: 0,
    column: 0,
    color: '#ffffff',
    isTaken: false,
  },
};

export const CanvasReducer = createReducer(initialState, (canvas) => {
  canvas
    .addCase(setCanvasId, (state: CanvasState, { payload }) => ({
      ...state,
      canvas: payload,
    }))
    .addCase(setPixels, (state: CanvasState, { payload }) => ({
      ...state,
      pixels: payload,
    }))
    .addCase(setRows, (state: CanvasState, { payload }) => ({
      ...state,
      rows: payload,
    }))
    .addCase(setColumns, (state: CanvasState, { payload }) => ({
      ...state,
      columns: payload,
    }))
    .addCase(setSelectedPixel, (state: CanvasState, { payload }) => ({
      ...state,
      selectedPixel: payload,
    }));
});
