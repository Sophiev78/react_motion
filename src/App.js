import React from 'react';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const App = () => {

  return (
    <Div className='App'>
      <BrowserRouter>
      <motion.div initial="hidden" animate="show">
      <Navbar/>
          <Routes>
            <Route path= '/' element={<Home/>}></Route>
            <Route path= '/Services' element={<Services/>}></Route>
            <Route path= '/Portfolio' element={<Portfolio/>}></Route>
            <Route path= '/Blog' element={<Blog/>}></Route>
            <Route path= '/Skills' element={<Skills/>}></Route>
            <Route path= '/Contact' element={<Contact/>}></Route>
          </Routes>
          <Footer/>
      </motion.div>
      </BrowserRouter>
      <ScrollToTop/>
    </Div>
  );
};

const Div = styled.div`
overflow:hidden;
`;

export default App;