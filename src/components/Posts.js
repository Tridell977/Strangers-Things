import AddNewPost from "./AddNewPost";
import SinglePost from "./SinglePost";
import { useEffect, useState } from "react";
import EditPost from "./EditPost";

const PostsTab = ({posts, token, setPosts}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [editingPost, setEditingPost] = useState({})
    const [editLive, setEditLive] = useState(false)
    
    useEffect(() => {
        if(searchTerm) {
        const searchableTerm = searchTerm.toLowerCase().trim().split(' ');
        const postsFiltered = posts.filter((post) => {
            const searchValues = [
                post.description,
                post.title,
                post.location,
                post.price
            ]
            for(let value of searchValues){
                const searchableValue = value.toLowerCase().trim()
                for(let term of searchableTerm ){
                    if(searchableValue.length > 0 && term.length > 0 && searchableValue.includes(term)){
                        return true;
                    }
                }
            }
            return false;
        })
        setFilteredPosts(postsFiltered)
        } else {
            setFilteredPosts(posts)
        }
    }, [searchTerm, posts])

    return (
        <>
        <h2>Posts</h2>
        <input id="searchBar" type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search"/>
        <div id="PostsPage">
        <div className="allPosts">{filteredPosts.map((post, index) => {
            return (
            <SinglePost key={index} token={token} setPosts={setPosts} post={post} posts={posts} setEditingPost={setEditingPost} setEditLive={setEditLive}/>
            )})}
        </div>
        {editLive ? <EditPost token={token} post={editingPost} setEditLive={setEditLive} posts={posts} setPosts={setPosts}/> :
         <AddNewPost token={token} setPosts={setPosts} posts={posts}/>}
        </div>
        </>
    )
}

export default PostsTab;