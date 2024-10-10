import React from 'react'
import StudentForm from './StudentForm';
import { useState } from 'react';
import { useDeleteStudentMutation } from '../store/studentApi';

export default function Student(props) {

  const {stu: {id, name, age, gender, address}} = props;

  const [isEdit, setIsEidt] = useState(false);

  // Mutation 返回元组
  const [delStudent, {isSuccess}] = useDeleteStudentMutation();

  const deleteHandler = () => {
    delStudent(id);
  };

  const cancelHandler = () => {
    setIsEidt(false);
  };

  return (
    <>
      {(!isEdit && !isSuccess) &&
        <tr>
          <td>{name}</td>
          <td>{gender}</td>
          <td>{age}</td>
          <td>{address}</td>
          <td>
            <button onClick={deleteHandler}>删除</button>
            <button onClick={() => setIsEidt(true)}>编辑</button>
          </td>
        </tr>
      } 
      {isEdit && <StudentForm stu={props.stu} onCancel={cancelHandler}/>}
      {/* {loading && <tr><td colSpan={5}>数据正在删除</td></tr>} */}
      {/* {error && <tr><td colSpan={5}>数据删除失败</td></tr>} */}
    </>
  )
}