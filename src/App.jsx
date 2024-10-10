// import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from './store/stuSlice';
import { useGetStudentsQuery } from './store/studentApi';
import StudentList from './components/StudentList';

function App() {
  // 加载 state 中的数据
  const student = useSelector(state => state.student);
  
  // 获取派发器对象
  const dispatch = useDispatch();

  // 调用 API 查询数据
  const { data, isSuccess, isLoading, refetch } = useGetStudentsQuery();


  const setNaneHandler = () => {
    dispatch(setName('hello world'));
  };

  return (
    <>
      {/* <p>{ JSON.stringify(student)}</p>
      <button onClick={setNaneHandler}>修改名称</button> */}

      <button onClick={refetch}>加载数据</button>
      { isLoading && <p>数据加载中...</p>}
      { isSuccess && 
        <StudentList stus={data}/>
      }

    </>
  )
}

export default App
