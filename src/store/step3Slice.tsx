import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Step3State {
  textarea: string;
}

const initialState: Step3State = {
  textarea: '',
};

const step3Slice = createSlice({
  name: 'step3',
  initialState,
  reducers: {
    updateStep3: (state, action: PayloadAction<Step3State>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateStep3 } = step3Slice.actions;
export default step3Slice.reducer;
