import { useEffect } from "react";
import { fetchAPI} from "../api/api";


const Home = ({posts, setPosts}) => {
    return (<div id="Home"><h2>Home</h2>
       {/* {posts ? <div className="allPosts">{posts.map((post, index) => <div className="singlePost" key={index}><h3>{post.title}</h3><p>{post.description}</p><p>Price: {post.price}</p></div>)}</div> : null} */}
        </div>
    )
}

export default Home;