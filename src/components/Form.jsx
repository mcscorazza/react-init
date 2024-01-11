import React from 'react'

export default function Form() {
  return (
    <div>
        <form>
            <div className="input-fields">
                <label htmlFor="nome">Nome</label>
                <input type="text" id='nome' />
            </div>
            <div className="input-fields">
                <input type="text" />
            </div>
            <div className="input-fields">
                <input type="text" />
            </div>
            <div className="input-fields">
                <input type="text" />
            </div>
            <button>Enviar</button>
        </form>
    </div>
  )
}
