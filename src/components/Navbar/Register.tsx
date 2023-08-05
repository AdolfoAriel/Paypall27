import {NavLink} from 'react-router-dom'
function Register() {
  return (
    <div className='Register'>
      <NavLink className={'Register'} to ={'/register'}
      >Register</NavLink>
      
    </div>
  )
}

export default Register