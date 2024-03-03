import { WorkOutsContext } from "../context/WorkoutContext"
import { useContext } from "react"

export const useWorkoutsContext = () =>{
    const context = useContext(WorkOutsContext)

    if(!context){
        throw Error('UseWorkout Context must be used within a context provider')
    }

    return context
}