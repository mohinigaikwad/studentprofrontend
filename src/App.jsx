import React from 'react'
import Home from './components/Home'
import Studnetlist from './components/Studnetlist'
// import Tax from './components/Tax'
// import './App.css'

import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/slist' element={<Studnetlist/>}/>
    </Routes>
    {/* <Home/> */}
    {/* <Studnetlist/> */}
    {/* <Tax/> */}
    </>
  )
}

export default App
