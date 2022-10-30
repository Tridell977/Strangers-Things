import { React } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";


const Login = ({username, setUsername, password, setPassword, setToken}) => {
    const handleLogin = async (event) => {
        event.preventDefault();
       try{ const data = await registerUser(username, password, "login")
        setToken(data.data.token)
        localStorage.setItem("token", data.data.token)
        navigate("/")
        setPassword("");
        setUsername("");
        } catch(error) {
            alert("Username and Password did not match, please try again")
        }
    }
    let navigate = useNavigate();
    return (
        <div className="formContainer">
        <h3>Please Enter your Username and Password</h3>
        <form id="login" onSubmit={handleLogin}>
            <input className="textInput" id="username" type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
            <input className="textInput" id="password" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button type="submit">Submit</button>
            {<button onClick={() => navigate('/register')}>Register</button> }
        </form>
        </div>
    )
}
export default Login;