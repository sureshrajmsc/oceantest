import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0;
let navv=0;
const initialState = {
  version: '1.0.0',
  value: 0,
  cnav:0,
  employee: {
    data: {},
    loading: 'idle',
    error: null,
  },
};
const slicer = createSlice({
  name: 'stepval',
  initialState,
  reducers: {
    currentNav(state, action) {
      state.cnav = action.payload;
    },
    
  }
})

export const { currentNav } = slicer.actions

export default slicer.reducer