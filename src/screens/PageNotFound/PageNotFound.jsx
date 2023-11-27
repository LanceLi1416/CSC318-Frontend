import React from "react";
import {useNavigate} from "react-router-dom";
import {RoundButton} from "../../components/RoundButton/RoundButton"
import "./PageNotFound.css";

export const PageNotFound = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(-1);
    }

    return (
        <div className="element">
            <div className="div">
                <div className="text-wrapper">404 Page Not Found</div>
                <RoundButton className="round-instance" text="Back" onClick={handleOnClick}/>
            </div>
        </div>
    );
};
export default PageNotFound;