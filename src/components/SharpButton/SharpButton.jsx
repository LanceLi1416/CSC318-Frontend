import PropTypes from "prop-types";
import React from "react";
import "./SharpButton.css";

export const SharpButton = ({className, text = "Button"}, onClick) => {
    return (
        <div className={`sharp ${className}`} onClick={onClick}>
            <div className="button">{text}</div>
        </div>
    );
};

SharpButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default SharpButton;