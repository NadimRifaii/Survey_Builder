import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  surveys: []
}
export const surveysSlice = createSlice({
  name: 'surveys',
  initialState,
  reducers: {
    setSurveys(state, action) {
      const { surveys } = action.payload;
      return { surveys }
    }
  }
})
export const { setSurveys } = surveysSlice.actions;
export const surveys = surveysSlice.name;
export default surveysSlice.reducer;
export const extractSurveysSlice = (global) => {
  return global[surveys]
}