import  {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../counter/counterSlice.ts'

export const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
//Whenever we want to use the state in the store we will use the RootState type

export type AppDispatch = typeof store.dispatch;
//Dispatch is a function that is used to change the state of the variable in the store;
//it's the primary way to trigger state changes within a Redux application, acting like a messenger delivering instructions to the store to modify the data accordingly