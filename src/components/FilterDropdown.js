import Dropdown from 'react-bootstrap/Dropdown';

function FilterDropdown({ onSelect }) {
    const activityTypes = [
        "All",
        "Grocery",
        "Hike",
        "Coffee",
        "Getting Food",
        "Concert",
        "Recreational Sports",
        "By the Water",
        "Sports Events",
        "Self Care",
        "Other"
    ];

    const handleSelect = (event) => {
        const selectedType = event.target.textContent;
        onSelect(selectedType);
    };

    const itemElements = activityTypes.map((item) => {
        return (
            <Dropdown.Item key={item} onClick={handleSelect}>{item}</Dropdown.Item>
        );
    });

    return (
        <Dropdown>
            <Dropdown.Toggle className="filter-dropdown">
                Filter By
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {itemElements}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default FilterDropdown;
