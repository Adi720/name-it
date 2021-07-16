import React, { useState } from "react";
import Header from "../Header/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SearchBox";
import './App.css';

const name = require("@rstacruz/startup-name-generator");


function App() {
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [headTitle, setHeadTitle] = useState("Name iT!");
    const [suggestedNames, setSuggestedNames] = useState([])

    const handleInputChange = (inputText) => {
        setHeaderExpanded(!(inputText));
        setSuggestedNames(inputText ? name(inputText) : []);
    }


    return (
        <div>
            <Header headerExpanded={headerExpanded} headTitle={headTitle} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultsContainer suggestedNames={suggestedNames} />
        </div>
    )
}

export default App;