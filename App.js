import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin';



function App() {
  return (
     <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/signin" element={<SignInPage/>}  />
    </Routes>
  );
}

export default App;
