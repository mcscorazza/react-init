import React from 'react'
import './Table.css'

export default function Tabela() {

  const i = 10

  return (
    <div>
        <table className='tableProd'>
            <thead>
                <tr>
                    <th className='tc'>ID</th>
                    <th className='desc'>Descrição</th>
                    <th>Volume</th>
                    <th>Código SKU</th>
                    <th className='forn'>Fornecedor</th>
                    <th className='tc'>STK</th>
                    <th className='tr'>Valor</th>
                </tr>
            </thead>
            <tbody>
              <tr><td className='tc'>{i}</td><td>Produto {i}</td><td>{i*10} ml</td><td>E0{i}VS00{i}</td><td>Fornecedor {i}</td><td  className='tc'>{i*5}</td><td className='tr'>{i},00</td></tr>
              <tr><td className='tc'>{i}</td><td>Produto {i}</td><td>{i*10} ml</td><td>E0{i}VS00{i}</td><td>Fornecedor {i}</td><td  className='tc'>{i*5}</td><td className='tr'>{i},00</td></tr>
              <tr><td className='tc'>{i}</td><td>Produto {i}</td><td>{i*10} ml</td><td>E0{i}VS00{i}</td><td>Fornecedor {i}</td><td  className='tc'>{i*5}</td><td className='tr'>{i},00</td></tr>
              <tr><td className='tc'>{i}</td><td>Produto {i}</td><td>{i*10} ml</td><td>E0{i}VS00{i}</td><td>Fornecedor {i}</td><td  className='tc'>{i*5}</td><td className='tr'>{i},00</td></tr>
              <tr><td className='tc'>{i}</td><td>Produto {i}</td><td>{i*10} ml</td><td>E0{i}VS00{i}</td><td>Fornecedor {i}</td><td  className='tc'>{i*5}</td><td className='tr'>{i},00</td></tr>
              <tr><td className='tc'>{i}</td><td>Produto {i}</td><td>{i*10} ml</td><td>E0{i}VS00{i}</td><td>Fornecedor {i}</td><td  className='tc'>{i*5}</td><td className='tr'>{i},00</td></tr>
              <tr><td className='tc'>{i}</td><td>Produto {i}</td><td>{i*10} ml</td><td>E0{i}VS00{i}</td><td>Fornecedor {i}</td><td  className='tc'>{i*5}</td><td className='tr'>{i},00</td></tr>
              <tr><td className='tc'>{i}</td><td>Produto {i}</td><td>{i*10} ml</td><td>E0{i}VS00{i}</td><td>Fornecedor {i}</td><td  className='tc'>{i*5}</td><td className='tr'>{i},00</td></tr>
              <tr><td className='tc'>{i}</td><td>Produto {i}</td><td>{i*10} ml</td><td>E0{i}VS00{i}</td><td>Fornecedor {i}</td><td  className='tc'>{i*5}</td><td className='tr'>{i},00</td></tr>
              <tr><td className='tc'>{i}</td><td>Produto {i}</td><td>{i*10} ml</td><td>E0{i}VS00{i}</td><td>Fornecedor {i}</td><td  className='tc'>{i*5}</td><td className='tr'>{i},00</td></tr>
            </tbody>
        </table>
    </div>
  )
}
