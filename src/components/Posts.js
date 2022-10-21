import { useEffect } from "react";
import { fetchAPI} from "../api/api";

const PostsTab = ({posts, setPosts}) => {
    useEffect(() => {fetchAPI("posts").then((result) => {
        setPosts(result.data.posts)
    })}, []);
    return (<div id="Home"><h2>Posts</h2>
       {posts ? <div className="allPosts">{posts.map((post, index) => <div className="singlePost" key={index}><h3>{post.title}</h3><p>{post.description}</p><p>Price: {post.price}</p></div>)}</div> : null}
       <button>New Post</button>
        </div>
    )
}

export default PostsTab;