import {React, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Register, PostsTab, NavBar, Profile} from "./components/index";
import { fetchAPI } from "./api/api";

const App = () => {
    const [posts, setPosts] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false);
    const [registered, setRegistering] = useState(false);
    const [token, setToken] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription ] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    useEffect(() => {fetchAPI("posts").then((result) => {
        setPosts(result.data.posts)
    })}, [posts]);
    useEffect(() => {
        const localToken = localStorage.getItem('token');
        localToken ? setToken(localToken) : null 
    }, [])
    return (
        <div id="app">
            <BrowserRouter>
            <NavBar loggedIn={loggedIn} registered={registered} setLoggedIn={setLoggedIn} setToken={setToken} token={token}/>  
            <Routes>
            <Route path="/" element={<Home posts={posts} setPosts={setPosts}/>}/>
            <Route path="/register" element={<Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} setRegistering={setRegistering} checkPassword={checkPassword} setCheckPassword={setCheckPassword}/>}/>
            <Route path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} setLoggedIn={setLoggedIn} setToken={setToken} token={token}/>}/>
            <Route path="/posts" element={<PostsTab posts={posts} token={token} title={title} setTitle={setTitle} description={description} setDescription={setDescription} price={price} setPrice={setPrice} location={location} setLocation={setLocation} willDeliver={willDeliver} setWillDeliver={setWillDeliver} setPosts={setPosts}/>}/>
            <Route path="/profile" element={<Profile />}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />)