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
        <title>Ihsan store</title>
        <meta property="og:type" content="website" />
        <meta name="description" property="og:description" content="ihsan store is where you can find the best electronics" />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
        <meta name="image" property="og:image" content="https://cdn.sanity.io/images/ta8yo7gl/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp" />

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
