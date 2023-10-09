import { createSlice } from '@reduxjs/toolkit';

interface StepState {
  currentStep: number;
  completedStep: number;
}

const initialState: StepState = {
  currentStep: 0,
  completedStep: 0,
};

const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    incrementStep: (state) => {
      state.currentStep += 1;
      state.completedStep += 1;
    },
    decrementStep: (state) => {
      state.currentStep -= 1;
      state.completedStep -= 1;
    },
  },
});

export const { incrementStep, decrementStep } = stepSlice.actions;
export default stepSlice.reducer;
