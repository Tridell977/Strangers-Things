import React from "react";

const Profile = ({me}) => {
    return (
        <div>
            <h2>Welcome {me.username}</h2>
            <h3>Messages</h3>
            {<div className="allPosts">{me.messages ? me.messages.map((message, index) => <div className="singlePost" key={index}><h4>From: {message.fromUser.username}</h4><p>{message.content}</p><p>From post: {message.post.title}</p></div>) : null}</div>}
            </div>
    )
}
export default Profile;