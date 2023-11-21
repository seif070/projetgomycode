import {Routes,Route} from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/login/Login'
import './App.css'
import HomePage from './components/homepage/HomePage'



function App() {
  return (
    <div className='App' >
{/* <Navbar/> */}
      <Routes>
        <Route  path='/' element={<Register/>}   />
        <Route path='/login' element={<Login/>}/>
<Route path="/home" element={<HomePage/>}/>



      </Routes>
    </div>
  );
}

export default App;
