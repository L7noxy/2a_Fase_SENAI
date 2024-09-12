import { useState } from "react"
import Login from "../Components/Login"
import PainelAdm from "../Components/PainelAdm"
import ProdutosParaMaiores from "../Components/ProdutosParaMaiores"
import UsuarioLogado from "../Components/UsuarioLogado"
import './Render.css'

function Render() {
    const [adm, setAdm] = useState(true)
    const [idade, setIdade] = useState(0)
    const [usuario, setUsuario] = useState(false)
  return (
    <div className="render-container">
        <h1>Renderização  condicionais</h1>
        <div>
            <button onClick={() => {setAdm(true)}}>Adm</button>
            <button onClick={() => {setAdm(false)}}>oreiaseca</button>
            { adm && <PainelAdm />}
        </div>

        <div className="render-container">
          <button onClick={() => {setIdade(idade-1)}}>-</button>
          {idade}
          <button onClick={() => {setIdade(idade+1)}}>+</button>
          {idade>=18 && <ProdutosParaMaiores />}
        </div>

        <div className="render-container">
          <button onClick={() => {setUsuario(true)}}>Logar</button>
          <button onClick={() => {setUsuario(false)}}>10Logar</button>
          {usuario ? <UsuarioLogado /> : <Login /> }
        </div>

    </div>
  )
}

export default Render
