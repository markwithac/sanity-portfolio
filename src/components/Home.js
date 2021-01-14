import React from 'react';
import NavBar from "./NavBar"
import Header from "./Header"
import Projects from './Projects';

export default function Home() {
  return (
    <div className="container">
      <NavBar />
      <Header />
      <Projects />
    </div>
  )
}
