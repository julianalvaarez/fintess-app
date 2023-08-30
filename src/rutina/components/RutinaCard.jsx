import { useContext } from "react";
import {Context} from '../../context/Context';


export default function RutinaCard({ejercicio}) {

  const {handleRutinaModal, eliminarRutina} = useContext(Context)



  
    return (
      <div className="border-red-400 border-2 rounded-sm hover:scale-105">
        <img className="h-64 sm:h-auto md:h-auto lg:h-auto xl:h-auto" src={ejercicio.gifUrl} />
        <h4 className="text-center font-bold text-md m-4 cursor-pointer" onClick={()=> handleRutinaModal(ejercicio)}>{ejercicio.name.toUpperCase()}</h4>
        <div className="flex justify-around my-3">
          <p className="bg-green-500 p-2 rounded-lg font-semibold text-white">{ejercicio.target.toUpperCase()}</p>
          <button className="bg-red-700 p-2 rounded-lg font-semibold text-white hover:bg-red-600 hover:scale-105 transition-transform" onClick={()=> eliminarRutina(ejercicio.id)}>Delete to rutine</button>
        </div>
      </div>
    );
  }