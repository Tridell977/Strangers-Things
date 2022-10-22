import AddNewPost from "./AddNewPost";



const PostsTab = ({posts, token, title, setTitle, description, setDescription, price, setPrice, location, setLocation, willDeliver, setWillDeliver, setPosts}) => {
    return (
        <>
        <h2>Posts</h2>
        <div id="Posts">
       {posts ? <div className="allPosts">{posts.map((post, index) => <div className="singlePost" key={index}><h3>{post.title}</h3><h4>Seller: {post.author.username}</h4><p>Description: {post.description}</p><p>Price: {post.price}</p><p>Location: {post.location}</p><p>Will Deliver: {post.willDeliver ? <>Yes</> : <>No</>}</p></div>)}</div> : null}
       <AddNewPost token={token} title={title} setTitle={setTitle} description={description} setDescription={setDescription} price={price} setPrice={setPrice} location={location} setLocation={setLocation} willDeliver={willDeliver} setWillDeliver={setWillDeliver} setPosts={setPosts} posts={posts}/>
        </div>
        </>
    )
}

export default PostsTab;