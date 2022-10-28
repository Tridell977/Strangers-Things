import AddNewPost from "./AddNewPost";
import SinglePost from "./SinglePost";

const PostsTab = ({posts, token, setPosts}) => {
    return (
        <>
        <h2>Posts</h2>
        <div id="Posts">
        <div className="allPosts">{posts.map((post, index) => {
            return (
            <SinglePost key={index} token={token} setPosts={setPosts} post={post} posts={posts}/>
            )})}
        </div>
        <AddNewPost token={token} setPosts={setPosts} posts={posts}/>
        </div>
        </>
    )
}

export default PostsTab;