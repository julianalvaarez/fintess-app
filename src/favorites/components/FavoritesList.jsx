import { useContext } from "react"
import { Context } from "../../context/Context"
import FavoriteCard from "./FavoriteCard"
import Modal from "../../exercises/components/Modal";


export default function FavoriteList() {
    const {favoritos} = useContext(Context)
    return (
        <div>
        {favoritos.length > 0 ? (
          <div  className="grid grid-cols-1 gap-10 place-items-center m-3 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
            {favoritos.map((favorito) => (
              <FavoriteCard
                key={favorito.id}
                favorito={favorito}
              />
            ))}
          </div>
        ) : (
          <h2 className='my-20 text-center font-mono font-bold text-3xl text-green-800'>There are not favorite exercises</h2>
          )}



      </div>
      )
    }