import { useState } from "react"
function Exemplo() {

    function aumentar(){
            setResultado(resultado + 1)
    }
    function diminuir(){
        setResultado(resultado - 1)
}
  return (
    <div className="calcular-media">
      <button onClick={aumentar} className='mais'>+</button>
      <button onClick={diminuir} className='menos'>-</button>
      {resultado}

<div>
  
</div>
    </div>
  )
}

export default Exemplo
