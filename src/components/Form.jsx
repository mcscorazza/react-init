import React from 'react'
import './Form.css'
import InputField from './InputField'
import Button from './Button'


export default function Form() {
  return (
    <div className='form-frame'>
        <div className='form-title'>Formulario de Cadastro</div>
        <form className='form-short'>
            <InputField idField="nome" nameField="Nome" typeField="text" />
            <InputField idField="email" nameField="E-mail" typeField="email" />
            <InputField idField="pwd" nameField="Senha" typeField="password" />
            <InputField idField="pwd2" nameField="Confirmação" typeField="password" />
            <InputField idField="other" nameField="Outro" typeField="text" />
            <Button typeBtn="btn-send" />
        </form>
    </div>
  )
}
