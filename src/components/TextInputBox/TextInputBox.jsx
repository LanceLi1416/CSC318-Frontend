import PropTypes from 'prop-types';
import React from 'react';
import './TextInputBox.css';

export const TextInputBox = ({placeholder, value, onChange, onSendMessage}) => {
    return (
        <div className="text-input-container">
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                className="text-input-field"
                onChange={onChange}
                onKeyDown={(e) => {
                    e.key === 'Enter' && onSendMessage(e.target.value)
                }}/>
            {/* You can add icons or buttons here if needed */}
        </div>
    )
}

TextInputBox.propTypes = {
    placeholder: PropTypes.string,
    onSendMessage: PropTypes.func,
}

export default TextInputBox;