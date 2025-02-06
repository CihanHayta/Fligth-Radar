import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import List from './pages/List';
import Header from './components/Header';
import Harita from './pages/Map';
import { useDispatch } from 'react-redux';
import { getFlights } from './redux/actions';
import Modal from './components/model';

const App = () => {

 const dispathc =   useDispatch();

  useEffect(()=>{
    dispathc(getFlights());
  },[])

  return  (
    <BrowserRouter>

    <Header/>

    <Routes>
      <Route path="/" element={<Harita />} />
      <Route path="/list" element={<List />} />

    </Routes>

    <Modal/>

  </BrowserRouter>
  )

};
export default App;