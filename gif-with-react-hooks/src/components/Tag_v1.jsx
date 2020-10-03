import React, { useEffect, useState } from 'react';
import axios from "axios";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const [tag, setTag] = useState("borderlands");
    const [gif, setGif] = useState("");

    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

        const { data } = await axios.get(url);

        const imageSrc = data.data.images.downsized_large.url;

        setGif(imageSrc);
    }
    useEffect(() => {         // works as COMPONENT DID MOUNT (first render)
        fetchGif(tag);
    }, [tag]);

    const handleCLick = () => {
        fetchGif(tag);
    };

    return (
        <div className="container">
            <h1>Random {tag} GIF</h1>
            <img width="500" src={gif} alt="Random Tag Gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={handleCLick}>CLICK FOR NEW</button>
        </div>
    );
}

export default Tag;