import { useContext } from "react"
import { Context } from "../../context/Context"

export default function Form() {
    const {handleSubmit, fetchApi} = useContext(Context)
    return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            fetchApi()
        }} className="flex justify-center my-20 mx-4">
            <input
            className="border-2 w-96 p-2 rounded-lg mx-3"
            type="text"
            placeholder="Search exercise by muscle (Ex: Biceps, Triceps...)"
            onChange={(e) => {
                handleSubmit(`/target/${e.target.value.toLowerCase()}`)
            }}
            />
            <input
            className="bg-green-400 p-2 px-4 rounded-lg font-semibold text-white cursor-pointer hover:bg-green-600"
            type="submit"
            value='Submit'
            />
        </form>
            <p className="text-center text-gray-600 font-light mb-20 w-auto -mt-20 mx-20">
            Supported muscles: abductors, abs, adductors, biceps, calves,
            cardiovascular system, delts, forearms, glutes, hamstrings, lats,
            levator scapulae, pectorals, quads, serratus anterior, spine, traps,
            triceps, upper back{" "}
            </p>
    </div>
    
  )
}
