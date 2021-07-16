import React from "react";
import "./SearchBox.css";
function SearchBox({ onInputChange }) {
    return (
        <div className="search-container">
            <input
                placeholder="Type keywords"
                className="search-input"
                onChange={(event) => onInputChange(event.target.value)}
            />
        </div>
    )
}

export default SearchBox
