import { configureStore } from '@reduxjs/toolkit'
import slicer from './slicer';
export const store = configureStore({
  reducer: {
    stepval: slicer
  },
})