import { configureStore } from '@reduxjs/toolkit'
import actionResultViewReducer from './redux/features/actions/actionResultViewSlices'
import actionReducer from './redux/features/actions/actionSlices'

const store = configureStore({
    reducer: {
      actions: actionReducer,
      actionViews: actionResultViewReducer
    }
  })
  
  export default store