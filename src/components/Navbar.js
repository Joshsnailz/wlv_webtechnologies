import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
import {Button} from 'antd'

const Navbar = () => {
    const {logout } = useLogout()
    const {user } = useAuthContext()

    const handleClick = () => {
        logout()
    }
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1> Workout Recorder</h1>
                </Link>
                <nav>
                    { user && (
                        <div>
                            <span>{user.email }</span>
                            <Button type="primary" onClick={ handleClick }>Log Out</Button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <Link to={"/login"}>Login </Link>
                            <Link to={"/signup"}>Signup </Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar