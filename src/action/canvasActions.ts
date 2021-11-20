import { createAction } from '@reduxjs/toolkit';
import { Pixel } from '../components/model/interface/pixel';

export const setCanvasId = createAction<number>('canvas/setCanvasId');

export const setPixels = createAction<Pixel[]>('canvas/setPixels');

export const setRows = createAction<number>('canvas/setRows');

export const setColumns = createAction<number>('canvas/setColumns');

export const setSelectedPixel = createAction<Pixel>('canvas/setSelectedPixel');

export const setSelectedColor = createAction<string>('canvs/selectColor');
