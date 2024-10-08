

import { configureStore, createSlice } from '@reduxjs/toolkit';
import { stuReducer } from './stuSlice'
import { schoolReducer } from './schoolSlice'
import studentApi from './studentApi';


// 创建 store
/* const store = configureStore({
    reducer: {
        student: stuReducer,
        school: schoolReducer,
    },
}); */

const store = configureStore({
    reducer: {
        [studentApi.reducerPath]: studentApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(studentApi.middleware),
    
});

export default store;