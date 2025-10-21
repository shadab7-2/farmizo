import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main><Outlet/></main>
      <Footer/>
    </>
  );
};

export default MainLayout;
