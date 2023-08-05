import {NavLink} from 'react-router-dom'
function Login() {
  return (
    <>
    <div className='Login'> 
      <NavLink className={'Login'} to={'/init'}>Login </NavLink>
    </div>

    </>
  )
}

export default Login