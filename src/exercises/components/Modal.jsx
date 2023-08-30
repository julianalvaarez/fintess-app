import "../../modal.css"
import { useContext, useState } from "react"
import {Context} from '../../context/Context';
import { IoIosClose } from "react-icons/io";

export default function Modal() {
    const {ejercicioModal, setMostrarModal, seleccionarSerie,setDiaSeleccionado} = useContext(Context)

    const {bodyPart, equipment, gifUrl, name, target} = ejercicioModal

    const [dia, setDia] = useState('')

  return (
    <div>
        <div className="modal z-50">
            <div className="modal__content border-2 border-green-400 m-7 bg-white">
                <IoIosClose onClick={()=> {setMostrarModal(false)} } className="text-4xl text-green-900"/>
                <img src={gifUrl} alt={name} className="p-2" />
                <div className="w-full h-full">
                  <h2 className="font-bold text-2xl text-center">{name.toUpperCase()}</h2>
                  <h5 className="text-center mt-2">Muscles Worked: <span className="font-semibold">{target.toUpperCase()}</span></h5>
                  <h5 className="text-center">Equipment Used: <span className="font-semibold">{equipment.toUpperCase()}</span></h5>
                </div>
              <div className="mx-2 mt-3 flex flex-col md:flex-row md:justify-around">
                <select
                        onChange={(e)=> setDia(e.target.value)}
                        className='p-3 rounded-lg cursor-pointer shadow-lg mt-1 w-full md:w-2/5 bg-gray-200'>
                        <option value=''>Select a day</option>
                        <option value='Monday'>Monday</option>
                        <option value='Tuesday'>Tuesday</option>
                        <option value='Wednesday'>Wednesday </option>
                        <option value='Thrusday'>Thursday </option>
                        <option value='Friday'>Friday </option>
                        <option value='Saturday'>Saturday </option>
                        <option value='Sunday'>Sunday </option>
                </select>
                <button onClick={()=> seleccionarSerie(dia, bodyPart, equipment, gifUrl, name, target )}    
                    className='p-2 text-white font-bold w-full uppercase mb-2 cursor-pointer  md:w-1/2 rounded-lg mt-3 mx-auto bg-emerald-500 hover:bg-emerald-700 transition-all  ease-in'>
                   Add to rutine</button>
              </div>
              </div>   
        </div>
    </div>

  )
}
