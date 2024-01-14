import React from 'react';
import './InputField.css';

export default function InputField(props) {
  return (
    <div className='input-field'>
        <input type={props.typeField} id={props.idField} required></input>
        <label htmlFor={props.idField}>{props.nameField}</label>
    </div>
  )
}
