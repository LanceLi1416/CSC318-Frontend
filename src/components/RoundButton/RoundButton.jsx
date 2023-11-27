import PropTypes from "prop-types";
import React from "react";
import "./RoundButton.css";

export const RoundButton = ({className, text = "Button", onClick}) => {
    return (
        <button className={`round ${className}`} onClick={onClick}>
            <div className="button">{text}</div>
        </button>
    );
};

RoundButton.propTypes = {
    text: PropTypes.string,
};

export default RoundButton;