import React from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import MovieList from "./combonants/MovieList/MovieList"
import FavList from "./combonants/FavList/FavList"
import Navbar from "./combonants/Navbar/Navbar"
const App=()=>{
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<MovieList/>}/>
      <Route path="/favorate" element={<FavList/>}/>
    </Routes>
    </BrowserRouter>
  )
}


export default App