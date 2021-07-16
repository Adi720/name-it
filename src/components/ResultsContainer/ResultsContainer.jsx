import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultsContainer.css";

const ResultsContainer = ({ suggestedNames }) => {
    const suggestNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />  // key={suggestedName} as each name is unique it can be used as key
    })

    return (
        <div className="results-container">
            {suggestNameJsx}
        </div>
    )
}

export default ResultsContainer
