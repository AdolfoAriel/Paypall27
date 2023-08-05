
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Principal from './components/Principal';
import LoginForm from './pages/Initsetion'; 
import RegisterForm from './pages/Registerin';
import { useState } from 'react';

function App():JSX.Element {
  interface Addres{
    street: String,
    zip:Number
  }


  interface Person{
    name: String,
    age:Number,
    addres: Addres,
    admin: boolean
    

  }
  const [user, setUser] = useState<Person | null>(null);

  const fetchUser = ()=> 
  setUser({
    name: "Adolfo",
    age:22,
    addres:{
      street:"6 sur",
      zip: 72590
    },
    admin: false
  })



  return (
    <>
    <button onClick={fetchUser}>Click to show the user</button>
    {user && <p>{`Welcome ${user.addres.street}`}</p>}
      <Routes>
        <Route path='/' element={<Principal/>}/>
        <Route path='/register' element ={<RegisterForm/>}/>
        <Route path='/Init' element={<LoginForm/>}/>
        </Routes>
   </>
  );
}

export default App;
