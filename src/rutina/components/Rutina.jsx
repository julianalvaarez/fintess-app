import { useContext, useState,useEffect } from "react"
import {Context} from '../../context/Context';
import RutinaCard from "./RutinaCard";

export default function Rutina() {
    const {rutina, } = useContext(Context)



    const [rutinaLunes, setRutinaLunes] = useState([])
    const [rutinaMartes, setRutinaMartes] = useState([])
    const [rutinaMiercoles, setRutinaMiercoles] = useState([])
    const [rutinaJueves, setRutinaJueves] = useState([])
    const [rutinaViernes, setRutinaViernes] = useState([])
    const [rutinaSabado, setRutinaSabado] = useState([])
    const [rutinaDomingo, setRutinaDomingo] = useState([])
    useEffect(() => {
      function filtrarRutina() {
        setRutinaLunes(rutina.filter((ejercicio) => ejercicio.dia === "Monday"))
        setRutinaMartes(rutina.filter((ejercicio) => ejercicio.dia === "Tuesday"))
        setRutinaMiercoles(rutina.filter((ejercicio) => ejercicio.dia === "Wednesday"))
        setRutinaJueves(rutina.filter((ejercicio) => ejercicio.dia === "Thursday"))
        setRutinaViernes(rutina.filter((ejercicio) => ejercicio.dia === "Friday"))
        setRutinaSabado(rutina.filter((ejercicio) => ejercicio.dia === "Saturday"))
        setRutinaDomingo(rutina.filter((ejercicio) => ejercicio.dia === "Sunday"))
      }
      filtrarRutina()
      console.log(rutina);
    }, [rutina])


    return (
        <>   
            <div >
                <h2 className="text-green-800 font-bold text-4xl mx-10 font-mono bg-gray-200 inline p-2 rounded-2xl">MONDAY</h2>
                    <div className="grid grid-cols-1 gap-10 place-items-center m-3 my-8 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
                        {rutinaLunes.length > 0 ? rutinaLunes.map((ejercicio) => (
                            <RutinaCard 
                            ejercicio={ejercicio}
                            key={ejercicio.length}/>
                        )) : <p className='text-center font-bold text-stone-600 w-full text-xl'> You have not added exercises for this day...</p> }
                    </div>
                <h2 className="text-green-800 font-bold text-4xl mx-10 font-mono  bg-gray-200 inline p-2 rounded-2xl">TUESDAY</h2>
                    <div className="grid grid-cols-1 gap-10 place-items-center m-3 my-8 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
                        {rutinaMartes.length > 0 ? rutinaMartes.map((ejercicio) => (
                            <RutinaCard 
                            ejercicio={ejercicio}
                            key={ejercicio.length}/>
                        )) : <p className='text-center font-bold text-stone-600 w-full text-xl'> You have not added exercises for this day...</p> }
                    </div>
                <h2 className="text-green-800 font-bold text-4xl mx-10 font-mono bg-gray-200 inline p-2 rounded-2xl">WEDNESDAY</h2>
                    <div className="grid grid-cols-1 gap-10 place-items-center m-3 my-8 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
                        {rutinaMiercoles.length > 0 ? rutinaMiercoles.map((ejercicio) => (
                            <RutinaCard 
                            ejercicio={ejercicio}
                            key={ejercicio.length}/>
                        )) : <p className='text-center font-bold text-stone-600 w-full text-xl'> You have not added exercises for this day...</p> }
                    </div>
                <h2 className="text-green-800 font-bold text-4xl mx-10 font-mono bg-gray-200 inline p-2 rounded-2xl">THURSDAY</h2>
                    <div className="grid grid-cols-1 gap-10 place-items-center m-3 my-8 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
                        {rutinaJueves.length > 0 ? rutinaJueves.map((ejercicio) => (
                            <RutinaCard 
                            ejercicio={ejercicio}
                            key={ejercicio.length}/>
                        )) : <p className='text-center font-bold text-stone-600 w-full text-xl'> You have not added exercises for this day...</p> }
                    </div>
                <h2 className="text-green-800 font-bold text-4xl mx-10 font-mono bg-gray-200 inline p-2 rounded-2xl">FRIDAY</h2>
                    <div className="grid grid-cols-1 gap-10 place-items-center m-3 my-8 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
                        {rutinaViernes.length > 0 ? rutinaViernes.map((ejercicio) => (
                            <RutinaCard 
                            ejercicio={ejercicio}
                            key={ejercicio.length}/>
                        )) : <p className='text-center font-bold text-stone-600 w-full text-xl'> You have not added exercises for this day...</p> }
                    </div>
                <h2 className="text-green-800 font-bold text-4xl mx-10 font-mono bg-gray-200 inline p-2 rounded-2xl">SATURDAY</h2>
                    <div className="grid grid-cols-1 gap-10 place-items-center m-3 my-8 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
                        {rutinaSabado.length > 0 ? rutinaSabado.map((ejercicio) => (
                            <RutinaCard 
                            ejercicio={ejercicio}
                            key={ejercicio.length}/>
                        )) : <p className='text-center font-bold text-stone-600 w-full text-xl'> You have not added exercises for this day...</p> }
                    </div>
                <h2 className="text-green-800 font-bold text-4xl mx-10 font-mono bg-gray-200 inline p-2 rounded-2xl">SUNDAY</h2>
                    <div className="grid grid-cols-1 gap-10 place-items-center m-3 my-8 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
                        {rutinaDomingo.length > 0 ? rutinaDomingo.map((ejercicio) => (
                            <RutinaCard 
                            ejercicio={ejercicio}
                            key={ejercicio.length}/>
                        )) : <p className='text-center font-bold text-stone-600 w-full text-xl'> You have not added exercises for this day...</p> }
                    </div>
            </div>
        </>
    )
}
