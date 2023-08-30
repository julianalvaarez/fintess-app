import { useContext } from "react"
import {Context} from '../../context/Context';
import Modal from "./Modal";
import RutinaModal from "../../rutina/components/RutinaModal";
import ExerciseCard from "./ExerciseCard";


export default function ExerciseList() {
    const {items, mostrarEjercicios,mostrarRutinaModal, modalVisible, mostrarModal} = useContext(Context)
    return (
        <div>
            {mostrarModal && <Modal/>}
            {mostrarRutinaModal && <RutinaModal/>}

            {mostrarEjercicios && (
            <>
              <div className="grid grid-cols-1 gap-10 place-items-center m-3 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
                {items.map((item) => (
                  <ExerciseCard
                    key={item.id}
                    exercise={item}
                  />
                ))}
              </div>
            </>
          )}
        </div>  
  )
}
