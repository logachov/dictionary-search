import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [word, setWord] = useState("hello");
    let [results, setResults] = useState(null);


    function apiResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        let urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(urlApi).then(apiResponse);
    }

    function newWord(event) {
        setWord(event.target.value);
    }

    return (
        <div className="Dictionary">
            <section>
                <h1>What word do you want to look up?</h1>
                <form onSubmit={search}>
                    <input type="search" autoComplete="off"
                        autoFocus="on" onChange={newWord} />
                </form>
                <div className="hint">
                    suggested words: peace, man, apple...
                </div>
            </section>
            <Results results={results} />
        </div>
    )
}