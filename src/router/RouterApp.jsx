
import Navegador from "../ui/Navegador"
import { Route, Routes } from "react-router"
import { ExercisesPage } from "../exercises/pages/ExercisesPage"
import { RutinePage } from "../rutina/pages/RutinePage"
import { FavoritePage } from "../favorites/pages/FavoritePage"
import { Footer } from "../ui/Footer"

export const RouterApp = () => {
  return (
    <>
      <Navegador />
      <Routes>
        <Route path="/*" element={<ExercisesPage/>} />
        <Route path="/routine" element={<RutinePage/>} />
        <Route path="/favorite" element={<FavoritePage/>} />
      </Routes> 
      <Footer/>
    </>
  )
}
