import { messageAuthor } from "../api/api"

const Message = ({messages, setMessages, token, postID}) => {
    const submitHandler = (event) => {
        event.preventDefault();
        messageAuthor(token, postID, messages);
        setMessages("");
    }
    return (
        <form id="messageForm" onSubmit={submitHandler}>
            <input className="textInput" type="text" placeholder="Message to author" value={messages} onChange={(event) => setMessages(event.target.value)}/>
            <button type="submit">Send</button>
        </form>
    )
}

export default Message