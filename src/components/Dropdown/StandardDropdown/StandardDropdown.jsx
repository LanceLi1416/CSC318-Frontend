import React, {useState} from 'react';
import './StandardDropdown.css';

export const StandardDropdown = ({options, label}) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="dropdown">
            <label htmlFor="language-select" className="dropdown-label">{label}</label>
            <select id="language-select" className="dropdown-select" value={selectedOption} onChange={handleChange}>
                <option value="">Select Language Server</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label} - {option.localized}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StandardDropdown;
