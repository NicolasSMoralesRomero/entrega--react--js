import { useState } from "react";

function CustomSelect({handleCategorySelected, categories}) {
    const [isOpen, setIsOpen] = useState(false); 
    const [selectedOption, setSelectedOption] = useState('Todos')

    const handleOptionClick = (value) => {
        setSelectedOption(value);
        setIsOpen(false);
        handleCategorySelected(value);
        
    };

    return (
        <>
        <div onClick={() => setIsOpen(!isOpen)}> 
            <div>
                {selectedOption}
                <span>&#9660;</span>
            </div>
                {isOpen && (
                    <ul>
                    {categories.map((category) => (
                        <li key={category.id}
                        onClick={() => handleOptionClick(category.title)}>
                        {category.title}
                        </li>
                        ))}
                    </ul>
                )
                }
        </div>
        </>
    )

}

export default CustomSelect;