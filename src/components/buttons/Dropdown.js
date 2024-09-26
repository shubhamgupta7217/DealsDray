import React, { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleToggle = (event) => {
      //e.prventDefault();
      event.preventDefault()
      setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        //event.preventDefault()
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={handleToggle}>
                {selectedOption.label}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleSelect(option)}>
                            {option.label}
                        </li>
                    ))}
                    {console.log("from drop")}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
