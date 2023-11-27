import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {RoundButton} from "../../components/RoundButton/RoundButton";
import {Dropdown} from "../../components/Dropdown/Dropdown";
import "./MainMenuScreen.css";

const languageOptions = [
    {value: 'cn', label: 'Chinese', localized: '中文'},
    {value: 'fr', label: 'French', localized: 'Français'},
    {value: 'jp', label: 'Japanese', localized: '日本語'},
    {value: 'kr', label: 'Korean', localized: '한국인'}
];
export const MainMenuScreen = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const navigate = useNavigate();

    const handleJoinClick = () => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/login');
        } else {
            if (selectedLanguage === 'jp') {
                navigate('/lobby');
            } else if (selectedLanguage !== '') {
                navigate('/404');
            }
        }
    }

    return (
        <div className="main-menu-screen">
            <div className="main-body">
                <div className="label">
                    <div className="text-wrapper">Lingu-ish-tic</div>
                </div>
                <div className="dropdown-wrap">
                    <Dropdown label="Language Server" options={languageOptions}
                              setSelectedLanguage={setSelectedLanguage}/>
                </div>
                <RoundButton className="button-mask" text="Join Server" onClick={handleJoinClick}/>
            </div>
        </div>
    );
};

export default MainMenuScreen;