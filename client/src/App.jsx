import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import RecipeSearch from './components/RecipeSearch';
import Profile from './pages/Profile';
import Mixcontext from './components/MixContext';
import NavBar from './components/NavBar';
import Login from './auth/Login';
import Register from './auth/Register';
import PrivateRoute from './auth/PrivateRoute';

function App() {
  return (
    <Mixcontext>

        <NavBar /> 
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/RecipeSearch' element={<RecipeSearch />} />
          <Route 
            path='/profile' 
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } 
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>

    </Mixcontext>
  );
}

export default App;
