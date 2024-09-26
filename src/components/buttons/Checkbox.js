import React, {useState} from 'react'

const Checkbox = ({ options, onSelect }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleSelect = (option) => {
      const isSelected = selectedOptions.includes(option);
      const newSelectedOptions = isSelected
        ? selectedOptions.filter((opt) => opt !== option)
        : [...selectedOptions, option];
      setSelectedOptions(newSelectedOptions);
      onSelect(newSelectedOptions);
    };
  
    return (
      <div className="checkbox-group">
        {options.map((option, index) => (
          <div className="checkbox" key={index}>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              checked={selectedOptions.includes(option)}
              onChange={() => handleSelect(option)}
            />
            <label htmlFor={`checkbox-${index}`}>{option.label}</label>
          </div>
        ))}
      </div>
    );
  }

export default Checkbox