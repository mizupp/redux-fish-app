import React, { useState, useEffect } from "react";
import axios from "axios";
import { FishCard } from '../../components';

const Fish = () => {

    const [fishList, setFishList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFish () {
            setLoading(true);
            const { data } = await axios.get("https://www.fishwatch.gov/api/species");
            setFishList(data);
            setLoading(false);
        }

        loadFish();

    }, [])

    return <>
            <h1>Fish</h1>
            <div className="fish-container">
                { loading? <em>Loading...</em> : fishList.map(b => <FishCard key={b.id} data={b}/>)}
            </div>
           </>
}

export default Fish;