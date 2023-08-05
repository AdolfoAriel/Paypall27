import logo from '../img/logo.jpeg'
import Business from './Navbar/Business'
import Personal from './Navbar/Personal'
import Recursos from './Navbar/Recursos'
import '../styles/navbar.css'
import Login from './Navbar/Login'
import Register from './Navbar/Register'
type Props={}

function NavBar(props:Props){
 return   <nav>
   <div className='contenedor-navbar'>
    
    <img className='logo' src={logo} alt='logo'/>
    
    <div className='contenedor-nav'>
        <Personal />
        <Business/>
        <Recursos/>
    </div>
   <div className='enter'>
     <Login/>
     <Register/>
   </div>
    </div>
   
 </nav>
};
export default NavBar