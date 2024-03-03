import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export const useAuthContext = () =>{
    const context = useContext(AuthContext)

    if(!context){
        throw Error(' authContext must be used within a context provider')
    }

    return context
}