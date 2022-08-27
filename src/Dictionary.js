import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
    let [word, setWord] = useState("");
    let [results, setResults] = useState(null);


    function apiResponse(response) {
        setResults(response.data[0]);
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        let urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(urlApi).then(apiResponse);
    }

    function newWord(event) {
        setWord(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="text" autoComplete="off"
                    autoFocus="on" onChange={newWord} />
            </form>
            <Results results={results} />
        </div>

    )
}