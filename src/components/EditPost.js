import { useEffect, useState } from "react";
import { editPost } from "../api/api";
const EditPost = ({token, post, setEditLive, posts, setPosts}) => {
    const [title, setTitle] = useState(post.title);
    const [description, setDescription ] = useState(post.description);
    const [price, setPrice] = useState(post.price);
    const [location, setLocation] = useState(post.location);
    const [willDeliver, setWillDeliver] = useState(false);

    return (
        <>
        {
            <form id="editPostForm" onSubmit={async (event) => {
                event.preventDefault()
                const edditedPost = await editPost(title, description, price, location, willDeliver, post._id, token);
                const newPosts = posts.map(post => {return (
                (post._id === edditedPost.data.post._id) ? edditedPost.data.post : post
                )})
                setPosts(newPosts)
                setTitle("");
                setDescription("");
                setPrice("");
                setLocation("")
                setWillDeliver(false)
                setEditLive(false);
            }}>
             <h3>Edit Post </h3>
             <input className="textInput" type="text" placeholder="Title" value={title} required onChange={(event) => setTitle(event.target.value)}/>
             <input className="textInput" type="text" placeholder="Description" value={description} required onChange={(event) => setDescription(event.target.value)}/>
             <input className="textInput" type="text" placeholder="Price" value={price} required onChange={(event) => setPrice(event.target.value)}/>  
             <input className="textInput" type="text" placeholder="Location" value={location} onChange={(event) => setLocation(event.target.value)}/> 
             <label><input id="WillDeliverCheckBox"type="checkbox" checked={willDeliver} onChange={() => setWillDeliver(!willDeliver)}/>Will Deliver</label>
             <button>Edit Post</button>
             </form>

     }
     </>
    )
}

export default EditPost