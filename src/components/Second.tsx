import second from '../img/second.png'
import '../styles/second.css'
 function Second() {
  return (<>
    <div className="contenedor-second">
        <h1>Cuida de ti y de los tuyos en casa,<br/>
         nosotros los cuidamos en línea.</h1>
    <div>Registrarse</div>
    </div>
    <div className='video-second'>
        <img  src={second} />
            </div>
    <div className='tercero'>¿Buscas a PayPal para negocios? Si tu negocio es local o global, estamos aquí para apoyarte.</div>        
    </>
  )
}


export default Second;