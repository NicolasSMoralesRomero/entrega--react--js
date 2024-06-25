import { useState } from "react";
import { Dropdown } from "react-bootstrap";

function CustomSelect({ handleCategorySelected, categories }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Todos");

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
    handleCategorySelected(value);
  };

  return (
    <Dropdown show={isOpen} onToggle={(isOpen) => setIsOpen(isOpen)}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {selectedOption}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {categories.map((category) => (
          <Dropdown.Item
            key={category.id}
            onClick={() => handleOptionClick(category.title)}
          >
            {category.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomSelect;