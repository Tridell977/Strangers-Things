import {React, useState} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Register, PostsTab, NavBar, Profile } from "./components/index";

const App = () => {
    const [posts, setPosts] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [needToLogin, setNeedToLogin] = useState(true);
    const [registering, setRegistering] = useState(false);
    return (
        <div>
            <BrowserRouter>
            <NavBar />  
            <Register setRegistering={setRegistering}/>
            <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} setNeedToLogin={setNeedToLogin} setRegistering={setRegistering}/>
            <Routes>
            <Route path="/home"><Home posts={posts} setPosts={setPosts}/></Route>
            <Route path="/posts"><PostsTab posts={posts} setPosts={setPosts}/></Route>
            <Route path="/profile"><Profile /></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />)