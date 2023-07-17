import React from 'react'
import { Home } from "../../pageComponents/Home";
import { People } from "../../pageComponents/People";
import {Routes, Route} from 'react-router-dom'


export const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
    </Routes>
  );
}