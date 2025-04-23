import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UIEffects from '../components/UIEffects';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <UIEffects /> {/* 💡 Applied globally */}
      <main className="pt-20 snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
