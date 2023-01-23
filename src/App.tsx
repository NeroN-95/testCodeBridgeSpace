import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage";
import CardArticle from "./components/CardArticle";

function App() {
  return (
   <>
   <Routes>
     <Route path='/' element={<Homepage/>}/>
       <Route path="/cards">
           <Route path=':cardId' element={<CardArticle/>}/>
       </Route>
   </Routes>
   </>
  );
}

export default App;
