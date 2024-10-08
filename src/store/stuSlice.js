import { configureStore, createSlice } from '@reduxjs/toolkit';

// 需要配置对象参数
const stuSlice = createSlice({
    name: 'stu',    // 自动生成 action 中的 type 属性
    initialState: {
        name: 'hi',
        age: 1,
        gender: '',
        address: ''
    },
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        },
        setAge(state, action) {
            state.age = action.payload;
        },
    }
});

// stuSlice.actions
export const {setName, setAge} = stuSlice.actions;

export const { reducer: stuReducer } = stuSlice;