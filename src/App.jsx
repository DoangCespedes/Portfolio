import React from 'react'
import { NavBar } from './components/navBar/NavBar'
import "./App.css";
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Home } from './components/home/Home';
export const App = () => {
  return (
    <>
      {/* <NavBar/> */}
      <div>
        <Header/>
        <Nav/>
        <Home/>
      </div>


    </>
     
  )
}
