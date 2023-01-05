import React from "react";
import { FishCard } from '../../components';

const Saved = () => {

    const fishList = [];

    return <>
            <h1>Saved fish</h1>
            <div className="fish-container">
                { fishList.length == 0 ? <em>No fish saved...</em> : fishList.map(b => <FishCard key={b.id} data={b}/>)}
            </div>
           </>
}

export default Saved;