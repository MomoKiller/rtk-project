
import React from 'react'
import './StudentForm.css';
import { useState } from 'react';

export default function StudentForm(props) {

  const [inputData, setInputData] = useState({
    name: props.stu ? props.stu.name : '',
    gender: props.stu ? props.stu.gender : '男',
    age: props.stu ? props.stu.age : '',
    address: props.stu ? props.stu.address : ''
  });

  const nameChangeHandler = (e) => {
    setInputData(preState => ({...preState, name: e.target.value}));
  };
  const genderChangeHandler = (e) => {
    setInputData(preState => ({...preState, gender: e.target.value}));
  };
  const ageChangeHandler = (e) => {
    setInputData(preState => ({...preState, age: +e.target.value}));
  };
  const addressChangeHandler = (e) => {
    setInputData(preState => ({...preState, address: e.target.value}));
  };

  const submitHandler = () => {
  };

  const updateHandler = () => {
  }

  return (
    <>
      <tr className="student-form">
          <td>
            <input type="text" value={inputData.name} onChange={nameChangeHandler}/>
          </td>
          <td>
            <select onChange={genderChangeHandler} value={inputData.gender}>
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
          </td>
          <td>
            <input type="number" onChange={ageChangeHandler} value={inputData.age}/>
          </td>
          <td>
            <input type="text" onChange={addressChangeHandler} value={inputData.address}/>
          </td>
          <td>
            {props.stu && 
              <>
                <button onClick={props.onCancel}>取消</button>
                <button onClick={updateHandler}>确认</button>
              </>
            }
            { !props.stu && <button onClick={submitHandler}>添加</button>}
          </td>
      </tr>
      {/* {loading && <tr><td colSpan={5}>正在添加</td></tr>} */}
      {/* {error && <tr><td colSpan={5}>{error.message}</td></tr>} */}
    </>
  )
}
