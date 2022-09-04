import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [word, setWord] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function DictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
        let urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(urlApi).then(DictionaryResponse);
        let pexelsApiKey = '563492ad6f91700001000001a9d2f62722724eaa86853eca032b743c';
        let headers = { Authorization: `${pexelsApiKey}` };
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function newWord(event) {
        setWord(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What word do you want to look up?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" autoComplete="off"
                            autoFocus="on" onChange={newWord} defaultValue={props.defaultKeyword} />
                    </form>
                    <div className="hint">
                        suggested words: peace, man, apple...
                    </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}