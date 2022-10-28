import React from "react";

const Profile = ({me}) => {
    let messagesFromMe;
    let messagesToMe;
    if(me.messages){
    messagesFromMe = me.messages.filter((message) => {
        return me.username === message.fromUser.username
    });
    messagesToMe = me.messages.filter((message) => {
        return me.username !== message.fromUser.username
    });
}

    return (
        <div>
            <h2>Welcome {me.username}</h2>
            <h3>Messages Sent to Me</h3>
            <div className="allPosts">{messagesToMe ? messagesToMe.map((message, index) =>
            <div className="singlePost" key={index}>
            <h4>From: {message.fromUser.username}</h4>
            <p>{message.content}</p> 
            <p>From post: {message.post.title}</p>
            </div>) : null} </div>
            <h3>Messages Sent from Me</h3>
            {<div className="allPosts">{messagesFromMe ? messagesFromMe.map((message, index) => 
            <div className="singlePost" key={index}>
                <h4>From: {message.fromUser.username}</h4>
                <p>{message.content}</p>
                <p>From post: {message.post.title}</p>
                </div>) : null}</div>}
            </div>
    )
}
export default Profile;