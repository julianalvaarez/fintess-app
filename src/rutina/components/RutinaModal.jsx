import "../../modal.css"
import { useContext, useState } from "react"
import {Context} from '../../context/Context';
import { IoIosClose } from "react-icons/io";

export default function RutinaModal() {
    const {ejercicioRutinaModal, setMostrarRutinaModal, agregarEjercicio} = useContext(Context)

    const {bodyPart, equipment, gifUrl, name, target} = ejercicioRutinaModal

    const [dia, setDia] = useState('')

  return (
    <div>
        <div className="modal z-50">
            <div className="modal__content border-2 border-green-400 m-7 bg-white">
                <IoIosClose onClick={()=> {setMostrarRutinaModal(false)} } className="text-4xl text-green-900"/>
                <img src={gifUrl} alt={name} className="p-2" />
                <div className="w-full h-full">
                  <h2 className="font-bold text-2xl text-center">{name.toUpperCase()}</h2>
                  <h5 className="text-center mt-2">Muscles Worked: <span className="font-semibold">{target.toUpperCase()}</span></h5>
                  <h5 className="text-center">Equipment Used: <span className="font-semibold">{equipment.toUpperCase()}</span></h5>
                </div>
                <div className="flex justify-around my-4">
                    <button onClick={()=> agregarEjercicio(ejercicioRutinaModal)} className="bg-green-400 p-2 rounded-lg font-semibold text-white hover:bg-green-600 hover:scale-105 transition-transform">Add to Favorites</button>
                    <button className="bg-red-700 p-2 rounded-lg font-semibold text-white hover:bg-red-600 hover:scale-105 transition-transform">Delete to rutine</button>
                </div>
              </div>   
        </div>
    </div>

  )
}

