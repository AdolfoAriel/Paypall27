import NavBar from "./NavBar"
import Second from "./Second"
import Third from "./Third"
import Timer from "./Timer"
function Principal() {
  return (
    <div className="App">
    <NavBar/>
    <Second/>
    <Third/>
    <Timer/>
    <footer><p>
      Términos y condiciones:<br/>
* La Protección al Comprador está disponible hasta 180 
días para compras que cumplan los requisitos. Revisa términos y condiciones.<br/>
** Sujeto a los términos y condiciones del programa de recompensas del emisor.<br/>
*** Requiere activación. Hasta $500 MXN por devolución y 12 devoluciones al año. Aplican términos y condiciones.</p>  </footer>
    </div>
  )
}

export default Principal