import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[confirm_password, setConfirmPassword]= useState('')
    const {signup, isLoading, error } = useSignup()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        await signup(email, password, confirm_password)

    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <label>Passwod:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <label>Confirm Password</label>
            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirm_password} />
            <button disabled={isLoading}>Sign Up</button>
            {error && <div className="error">{error} </div>}
        </form>
    )
}
export default Signup