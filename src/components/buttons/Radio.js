import React, {useState} from 'react'


const Radio = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
  
    const handleSelect = (option) => {
      setSelectedOption(option);
      onSelect(option);
    };
  
    return (
      <div className="radio-group">   
  
        {options.map((option, index) => (
          <div className="radio-button" key={index}>
            <input
              type="radio"
              name="radio-group"
              value={option.value}
              checked={selectedOption.value === option.value}
              onChange={() => handleSelect(option)}
            />
            <label htmlFor={`radio-${index}`}>{option.label}</label>
          </div>
        ))}
      </div>
    );
  }

export default Radio;