import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
    let [word, setWord] = useState("");

    function newWord(event) {
        event.preventDefault();
        setWord(event.target.value);
    }

    function apiResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        alert(word);
        let urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(urlApi).then(apiResponse);
    }

    return (
        <form onSubmit={search}>
            <input type="search" onChange={newWord} />
        </form>
    )
}