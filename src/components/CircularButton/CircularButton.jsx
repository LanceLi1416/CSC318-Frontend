import PropTypes from 'prop-types';
import React from 'react';
import './CircularButton.css';

export const CircularButton = ({icon, onClick}) => {
    return (
        <button className="circular-button" onClick={onClick}>
            <img src={icon} alt="B" className="button-icon"/>
        </button>
    )
}

CircularButton.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func
}

export default CircularButton;