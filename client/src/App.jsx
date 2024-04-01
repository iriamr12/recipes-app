import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage'
import RecipeSearch from './components/RecipeSearch'
import Profile from './components/Profile';
import Mixcontext from './components/MixContext';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';


function App(user) {

  return (

<div>
<Mixcontext>
  <NavBar />
          <Routes>
          <Route path='/' element={<Homepage/>}/> 
          <Route path='/RecipeSearch' element={<RecipeSearch/>}/> 
          <Route path='/Profile' element={<PrivateRoute><Profile/></PrivateRoute>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/register' element={<Register/>}/> 

          </Routes>
</Mixcontext>

</div>
          

  )
}

export default App
