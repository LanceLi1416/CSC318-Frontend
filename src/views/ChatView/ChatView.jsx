import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ChatView.css'

const formatDate = (isoString) => {
    const date = new Date(isoString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-indexed
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${month}-${day} ${hours}:${minutes}`;
};
export const ChatView = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Fetch messages when the component is mounted
        const fetchMessages = async () => {
            try {
                let config = {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}};
                const response = await axios.get('http://localhost:8000/chat/world/', config);
                let messages = await fetchUsernames(response.data.results);

                messages = messages.reverse();
                setMessages(messages);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, []);

    const fetchUsernames = async (messages, config) => {
        const userIds = [...new Set(messages.map(msg => msg.user))];
        const userRequests = userIds.map(id =>
            axios.get(`http://localhost:8000/api/users/${id}/`, config)
        );
        const userResponses = await Promise.all(userRequests);
        const users = userResponses.map(response => response.data);

        return messages.map(message => {
            const userDetail = users.find(user => user.id === message.user);
            console.log(userDetail);
            return { ...message, username: userDetail?.username || 'Unknown' };
        });
    };

    return (
        <div className="chat-view">
            {messages.map((message) => (
                <div key={message.id} className="message">
                    <span className="time">{formatDate(message.created_at)}</span>
                    <span className="sender">{message.username}</span>
                    <span className="text">{message.message}</span>
                </div>
            ))}
        </div>
    );
}

export default ChatView;