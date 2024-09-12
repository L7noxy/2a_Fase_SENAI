import { useState } from 'react' 
import './App.css'
import Contato from './pages/contato'
import Home from './pages/Home'
import NaoSei from './pages/NaoSei'
import Render from './pages/Render'

function App(){
    
     const [pagina, setPagina] = useState()

     function mostrarHome(){
        setPagina(<Home />)
     }

     function mostrarContato(){
        setPagina(<Contato />)
     }

     function mostrarNaoSei(){
        setPagina(<NaoSei />)
     }

     function mostrarRender(){
        setPagina(<Render />)
     }

     return (
        <center>
        <> 
        <nav>
            <button onClick={mostrarHome}>Home</button>
            <button onClick={mostrarNaoSei}>Não sei</button>
            <button onClick={mostrarContato}>Mostrar Contato</button>
            <button onClick={mostrarRender}>Mostrar Render</button>
        </nav>
        {pagina}
        </>
        </center>
 
     )
}  

export default App