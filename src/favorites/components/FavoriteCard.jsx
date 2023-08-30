import { useContext } from "react"
import { Context } from "../../context/Context"

export default function FavoriteCard({favorito}) {
    const {eliminarFavorito} = useContext(Context)

    return (
        <div className="border-green-400 border-2 rounded-sm hover:scale-105 ">
        <img src={favorito.gifUrl} alt={favorito.name}/>
        <h4 className="text-center font-bold text-md m-4 " >
          {favorito.name.toUpperCase()}
        </h4>
        <div className="flex justify-around my-3">
          <p className="bg-green-500 p-2 rounded-lg font-semibold text-white">{favorito.target.toUpperCase()}</p>
          <button className="bg-red-500 p-2 rounded-lg font-semibold text-white hover:bg-red-600 hover:scale-105 transition-transform" onClick={()=> eliminarFavorito(favorito.id)}>Delete to Favorites</button>
        </div>
      </div>
      )
    }
    