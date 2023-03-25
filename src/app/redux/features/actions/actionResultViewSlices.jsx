import { createSlice , current} from '@reduxjs/toolkit'
import { fetchAction } from './actionSlices'

const initialState = {
  actionResult: []
}


const actionResultViewSlice = createSlice({
  name: 'actionResultView',
  initialState,
  reducers: {
    append: (state, action) => {
      state.actionResult = [...state.actionResult, action.payload]
    },
    remove: (state, action) => {
      const id = action.payload;
      const newActionResult = current(state.actionResult).filter((result) => result.id !== id);
      state.actionResult = newActionResult;
    },
    removeChildContent: (state, action) => {
      const currentActionResult = current(state.actionResult);
      const {id, class_name, specification} = action.payload;
      const selectedActionResultIndex = currentActionResult.findIndex((result)=> result.id === id);
      if (selectedActionResultIndex!==-1){
          
          const replacedItem = currentActionResult[selectedActionResultIndex];
          const remainList = replacedItem.content.filter((result) => !(result.class_name==class_name && result.specification==specification));
          if (!remainList){
            state.actionResult = [...state.actionResult.slice(0, selectedActionResultIndex),  ...state.actionResult.slice(selectedActionResultIndex + 1)];
          }else{
            state.actionResult = [...state.actionResult.slice(0, selectedActionResultIndex), {...replacedItem, content:remainList}, ...state.actionResult.slice(selectedActionResultIndex + 1)]
          };
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchAction.fulfilled, (state, action) => {
      state.actionResult = [...state.actionResult, ...action.payload];
        console.log(state.actionResult);
    })
  }
})


export default actionResultViewSlice.reducer
export const { append, remove ,removeChildContent} = actionResultViewSlice.actions