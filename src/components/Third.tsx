import third1 from '../img/third1.png'
import gif from '../img/dress.gif'
import third3 from '../img/third3.png'
import third4 from '../img/third4.png'
import third5 from '../img/third5.png'
import '../styles/third.css'



function Third<third>() {
  return (<>
    <div className='third1'>
        <div className='imgt1'>
        <img  src={third1} alt='third1'/>
        </div>   
        <div className='textt1'>
        <h1>El mundo es tu centro comercial</h1>
        <p>Desde grandes marcas hasta pequeñas boutiques, con PayPal puedes<br/> 
        comprar de manera segura en millones de tiendas en línea de México y de todo el mundo.</p>
        </div>
    </div>
    <div className='third2'>
     <div className='imgt2'>
        <img  src={gif} alt='third2'/>
     </div>

     <div className='textt2'>
     <h1>¿Vas a devolver una compra?<br/>
      Obtén el reembolso de los<br/>
       gastos de envío.</h1>
    <p>Si devuelves una compra que realizaste con PayPal, puedes pedir el<br/>
     reembolso de los gastos de envío de la devolución***.</p>
     </div>
    </div>

    
    <div className='third3'>
    <div className='imgt3'>
        <img  src={third3} alt='third3'/>
        </div>
        <div className='textt3'>
        <h1>Distribuye tus pagos en<br/> 
        mensualidades</h1>
        <p>Paga con PayPal a meses sin intereses en miles de comercios y facilita tu<br/>
         flujo de efectivo mensual, sin importar la tarjeta de crédito que uses.
</p>
        </div>
    </div>

    <div className='third4'>
    <div className='imgt4'>
        <img  src={third4} alt='third4'/>
        </div>

        <div className='textt4'>
        <h1>Compra en línea con confianza</h1>
     <p>Mantente seguro al comprar en línea con nuestro monitoreo antifraude <br/>
      24/7, nuestros 180 días de Protección al Comprador* y nuestro servicio de <br/>
       reembolso de gastos de envío de devolución***. Aplican términos y <br/>
       condiciones.</p>
       </div>
    </div>


    <div className='third5'>
        <div className='textt5'>
        <h1>Compra en millones de marcas que te encantan</h1>
        </div>
    <div className='imgt5'>
        <img  src={third5} alt={third5}/>
        </div>
    </div>
    </>
  )
}

export default Third