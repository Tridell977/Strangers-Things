import Message from "./Message";
import { deletePost } from "../api/api";
const SinglePost = ({post, token, setPosts, posts}) => {
    return (
        <div className="singlePost"><h3>{post.title}</h3>
        {<h4>Seller: {post.author.username}</h4>}
       <p>Description: {post.description}</p><p>Price: {post.price}</p><p>Location: {post.location}</p>
       <p>Will Deliver: {post.willDeliver ? <>Yes</> : <>No</>}</p>
        {post.isAuthor ? <button onClick={() => {deletePost(post._id, token, posts, setPosts)}}>Delete</button> : null}
        {token && !post.isAuthor ? <Message token={token} postID={post._id} /> : null}
        </div>
    )
}
export default SinglePost;