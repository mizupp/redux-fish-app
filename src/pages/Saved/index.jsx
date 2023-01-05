import React from "react";
import { useSelector } from "react-redux"
import { FishCard } from '../../components';

const Saved = () => {

    const fishList = useSelector(state => state.savedFish)

    return <>
            <h1>Saved fish</h1>
            <div className="fish-container">
            { fishList.length == 0 ? <em>No fish saved...</em> : fishList.map((f, i) => <FishCard key={i} data={f}/>)}
            </div>
           </>
}

export default Saved;