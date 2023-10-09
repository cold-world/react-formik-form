import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Sex {
  Man = 'man',
  Woman = 'woman',
}

export interface Step1State {
  nickname: string;
  name: string;
  surname: string;
  sex: Sex | '';
}

const initialState: Step1State = {
  nickname: '',
  name: '',
  surname: '',
  sex: '',
};

const step1Slice = createSlice({
  name: 'step1',
  initialState,
  reducers: {
    updateStep1: (state, action: PayloadAction<Step1State>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateStep1 } = step1Slice.actions;
export default step1Slice.reducer;
