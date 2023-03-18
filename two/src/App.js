import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Upload from './components/Upload';
import Videos from './components/Videos';
function App(){
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/videos' element={<Videos/>} />
        <Route path='/upload' element={<Upload/>} />

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
