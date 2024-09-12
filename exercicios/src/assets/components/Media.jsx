import React from 'react'
import { useState } from 'react'
import './Media.css'

function Media() {


    function calcularMedia(){
        let nota1 = Number(prompt("digite o 1° número: "))
        let nota2 = Number(prompt("digite o 1° número: "))
        let nota3 = Number(prompt("digite o 1° número: "))
        let media = (nota1 + nota2 + nota3) / 3
        setResultado(media)
    }
    const [resultado, setResultado] = useState()
  return (
    <div className='Media-Container'>
      <h2 className='Exercicios'>Exercicios para calcular </h2>
        <button onClick={calcularMedia} className='calcular-media'>Calcular Media</button>

      {resultado}
    </div>
  )
}

export default Media
