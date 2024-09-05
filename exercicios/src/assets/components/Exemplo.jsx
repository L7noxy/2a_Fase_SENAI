import { useState } from "react"
function Exemplo() {

    const [resultado, setResultado] = useState(0)

    function aumentar(){
            setResultado(resultado + 1)
    }
    function diminuir(){
        setResultado(resultado - 1)
}
  return (
    <div className="calcular-media">
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
      {resultado}

    </div>
  )
}

export default Exemplo
