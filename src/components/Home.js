import { deletePost } from "../api/api";

const Home = ({me, token, posts, setPosts}) => {
    return (
        <div id="Home">
            {console.log(me)} 
            <h2>Welcome Home {me.username}</h2>
            <h4>My Posts</h4>
            <div className="allPosts">{me.posts ? me.posts.map((post, index) =>
             <div className="singlePost" key={index}><h3>{post.title}</h3><h4>Seller: {post.author.username}</h4>
             <p>Description: {post.description}</p><p>Price: {post.price}</p><p>Location: {post.location}</p>
             <p>Will Deliver: {post.willDeliver ? <>Yes</> : <>No</>}</p>
             {post.active ? <button onClick={() => {deletePost(post._id, token, posts, setPosts)}}>Delete</button>
             : <p>Post Deleted</p>}</div>) : null}</div>
       
        </div>
        
    )
}

export default Home;