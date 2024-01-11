import React from 'react'
import InputField from './InputField'


export default function Form() {
  return (
    <div>
        <form>
            <InputField idField="nome" nameField="Nome" typeField="text" />
            <button>Enviar</button>
        </form>
    </div>
  )
}
