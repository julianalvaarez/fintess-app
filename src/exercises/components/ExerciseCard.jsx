import { useContext } from "react";
import {Context} from '../../context/Context';


export default function ExerciseCard({exercise}) {
    const {agregarEjercicio, handleModal} = useContext(Context)
    
    const handleClick = (e) => {
      e.preventDefault()
      agregarEjercicio(exercise)
    };
  
    return (
      <div className="border-green-400 border-2 rounded-sm hover:scale-105">
        <img className="h-64 sm:h-auto md:h-auto lg:h-auto xl:h-auto" src={exercise.gifUrl} alt={exercise.name} />
        <h4 className="text-center font-bold text-md m-4 cursor-pointer" onClick={()=> handleModal(exercise)}>{exercise.name.toUpperCase()}</h4>
        <div className="flex justify-around my-3">
          <p className="bg-red-500 p-2 rounded-lg font-semibold text-white">{exercise.target.toUpperCase()}</p>
          <button className="bg-green-400 p-2 rounded-lg font-semibold text-white hover:bg-green-600 hover:scale-105 transition-transform" onClick={handleClick}>Add to Favorites</button>
        </div>
      </div>
    );
  }