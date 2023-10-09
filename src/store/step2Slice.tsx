import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Step2State {
  advantages: string[];
  checkboxes: number[];
  radio: number | null;
}

const initialState: Step2State = {
  advantages: [],
  checkboxes: [],
  radio: null,
};

const step2Slice = createSlice({
  name: 'step2',
  initialState,
  reducers: {
    updateStep2: (state, action: PayloadAction<Step2State>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    addAdvantage: (state, action: PayloadAction<string>) => {
      state.advantages.push(action.payload);
    },
    removeAdvantage: (state, action: PayloadAction<number>) => {
      state.advantages.splice(action.payload, 1);
    },
    toggleCheckbox: (state, action: PayloadAction<number>) => {
      const { checkboxes } = state;
      const index = checkboxes.indexOf(action.payload);
      if (index !== -1) {
        checkboxes.splice(index, 1);
      } else {
        checkboxes.push(action.payload);
      }
    },
  },
});

export const { updateStep2, addAdvantage, removeAdvantage, toggleCheckbox } = step2Slice.actions;
export default step2Slice.reducer;
