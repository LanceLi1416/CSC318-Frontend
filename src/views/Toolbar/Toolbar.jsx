import axios from "axios";
import React, {useState} from 'react';
import CircularButton from "../../components/CircularButton/CircularButton";
import TextInputBox from "../../components/TextInputBox/TextInputBox";
import './Toolbar.css';

export const Toolbar = () => {
    const [message, setMessage] = useState('');

    const onClickPlaceholder = () => {
        // TODO: use actual on click functions
        console.log("Clicked");
    };

    const onSendMessage = () => {
        console.log(message);
        if (message.trim()) { // Check if message isn't just whitespace
            axios.post('http://localhost:8000/chat/world/', {
                message: message
            }, {
                headers: {
                    // Assuming you store your token in localStorage after login
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(response => {
                    console.log(response.data);
                    // Handle success (e.g., clear the message input, update message list, etc.)
                })
                .catch(error => {
                    console.error('There was an error sending the message', error);
                    // Handle error (e.g., show an error message to the user)
                });
        }
        setMessage('');
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className="toolbar">
            <CircularButton onClick={onClickPlaceholder}/> {/* Forum */}
            <CircularButton onClick={onClickPlaceholder}/> {/* Following */}
            <TextInputBox placeholder="Type your message here..."
                          value={message}
                          onChange={handleMessageChange}
                          onSendMessage={onSendMessage}/>
            <CircularButton onClick={onSendMessage}/> {/* Send */}
            <CircularButton onClick={onClickPlaceholder}/> {/* Settings */}
        </div>
    );
}

export default Toolbar;
