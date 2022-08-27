import React, { useState } from "react";

export default function Dictionary() {
    let [word, setWord] = useState("");

    function newWord(event) {
        event.preventDefault();
        setWord(event.target.value);
    }

    function search(event) {
        event.preventDefault();
        alert(word);
    }

    return (
        <form onSubmit={search}>
            <input type="search" onChange={newWord} />
        </form>
    )
}