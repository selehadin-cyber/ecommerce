import React, { ReactChild, ReactFragment, ReactPortal } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export interface LayoutProps  { 
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <head>
        <title>Phone and PC accesories</title>
      </head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
