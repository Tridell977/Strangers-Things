import {React, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Register, PostsTab, NavBar, Profile} from "./components/index";
import { callMe, fetchAPI } from "./api/api";

const App = () => {
    const [posts, setPosts] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false);
    const [registered, setRegistering] = useState(false);
    const [token, setToken] = useState('');
    const [postId, setPostId] = useState('');
    const[me, setMe] = useState({})
    useEffect(() => {
        const localToken = localStorage.getItem('token');
        localToken ? setToken(localToken) : null;
    }, [])
    useEffect(() => {fetchAPI("posts", token).then((result) => {
        setPosts(result.data.posts);
    
    })}, [token]);
    useEffect(() => {
        token ? callMe(token).then((result) => setMe(result.data)) : null;
    }, [token, posts])
    return (
        <div id="app">
            <BrowserRouter>
            <NavBar loggedIn={loggedIn} registered={registered} setLoggedIn={setLoggedIn} setToken={setToken} token={token}/>  
            <Routes>
            <Route path="/" element={<Home me={me} token={token} posts={posts} setPosts={setPosts} />}/>
            <Route path="/register" element={<Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} setRegistering={setRegistering} checkPassword={checkPassword} setCheckPassword={setCheckPassword}/>}/>
            <Route path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} setLoggedIn={setLoggedIn} setToken={setToken} token={token}/>}/>
            <Route path="/posts" element={<PostsTab posts={posts} token={token}  setPosts={setPosts} setPostId={setPostId} postId={postId}/>}/>
            <Route path="/profile" element={<Profile me={me}/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />)