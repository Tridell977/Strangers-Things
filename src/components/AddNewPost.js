import { createPost } from "../api/api"
const AddNewPost = ({token, title, setTitle, description, setDescription, price, setPrice, location, setLocation, willDeliver, setWillDeliver, setPosts, posts}) => {
    return (
        <>
        {token ?
            <form id="addPostForm" onSubmit={async (event) => {
                event.preventDefault()
                const post = await createPost(title, description, price, location, willDeliver, token);
                setPosts([...posts, post])
                setTitle("");
                setDescription("");
                setPrice("");
                setLocation("")
                setWillDeliver(false)
            }}>
             <h3>Add New Post</h3>
             <input className="textInput" type="text" placeholder="Title" value={title} required onChange={(event) => setTitle(event.target.value)}/>
             <input className="textInput" type="text" placeholder="Description" value={description} required onChange={(event) => setDescription(event.target.value)}/>
             <input className="textInput" type="text" placeholder="Price" value={price} required onChange={(event) => setPrice(event.target.value)}/>  
             <input className="textInput" type="text" placeholder="Location" value={location} onChange={(event) => setLocation(event.target.value)}/> 
             <label><input id="WillDeliverCheckBox"type="checkbox" value={willDeliver} onChange={() => setWillDeliver(!willDeliver)}/>Will Deliver</label>
             <button>New Post</button>
             </form>
             : null
     }
     </>
    )
}
export default AddNewPost