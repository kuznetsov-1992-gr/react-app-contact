import React from "react";
import { Routes, Route } from "react-router-dom";

import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage"
import AboutPage from "../pages/AboutPage"
import Loyout from "./Loyout";
import ProtectedRoures from "./ProtectedRoutes";
import AddContactPage from "../pages/AddContactPage";





function App() {
  return (
    <Routes>
      <Route path="/" element={<Loyout/>}>
      <Route path={'/'} element={
        <ProtectedRoures>
          <HomePage/>
        </ProtectedRoures>
      }/>
        <Route  path={'/register'} element={<RegisterPage/>}  />
        <Route path={'/addContact'} element={
          <ProtectedRoures>
            <AddContactPage/>
          </ProtectedRoures>
        }/>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/about'} element={<AboutPage/>}/>
      </Route>
    </Routes>
  )
}

export default App;
