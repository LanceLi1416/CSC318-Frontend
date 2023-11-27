import React, {useState} from 'react';
import './Dropdown.css';

export const Dropdown = ({options, label, setSelectedLanguage}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setSelectedLanguage(option.value);
        setIsOpen(false);
    };


    return (
        <div className="dropdown">
            <label className="dropdown-label">{label}</label>
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedOption ? `${selectedOption.label} - ${selectedOption.localized}` : 'Select Language Server'}
                <span className="dropdown-arrow">&#9662;</span>
            </div>
            {isOpen && (
                <div className="dropdown-list-container">
                    <ul className="dropdown-list">
                        {options.map((option, index) => (
                            <li key={option.value} className="dropdown-option"
                                onClick={() => handleOptionClick(option)}>
                                <span className="option-label">{option.label}</span>
                                <span className="option-localized">{option.localized}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
