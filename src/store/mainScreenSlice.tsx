import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StarterState {
  email: string;
  phone: string;
}

const initialState: StarterState = {
  email: '',
  phone: '',
};

const starterSlice = createSlice({
  name: 'starter',
  initialState,
  reducers: {
    updateStarter: (state, action: PayloadAction<StarterState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateStarter } = starterSlice.actions;
export default starterSlice.reducer;
