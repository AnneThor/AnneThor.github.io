import React from 'react';
import '../App.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function HomePage() {
  return(
    <div>
    <Header />
    <section id="home">
      <h1>Anne Thorsteinson</h1>
      <p>Full Stack Web Developer | Project Manager | Travel Expert</p>
    </section>
    <Footer />
    </div>
  );
}
