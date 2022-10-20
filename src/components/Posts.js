import { useEffect } from "react";
import { fetchAPI} from "../api/api";

const PostsTab = ({posts, setPosts}) => {
    useEffect(() => {fetchAPI("posts").then((result) => {
        setPosts(result.data.posts)
    })}, []);
    return (<div id="Home"><h1>Home</h1>
       {posts ? <div className="allPosts">{posts.map((post, index) => <div className="singlePost" key={index}><h3>{post.title}</h3><p>{post.description}</p><p>Price: {post.price}</p></div>)}</div> : null}
        </div>
    )
}

export default PostsTab;