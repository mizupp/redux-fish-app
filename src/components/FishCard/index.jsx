import React, {useState} from 'react';
import { ButtonControl } from '..';

const FishCard = ({ data }) => {

    const [saved, setSaved] = useState(false)

    const handleSave = () => {
        setSaved(prev => !prev);
    }

    return <div className="fish-card">
            <h2>{data["Species Name"]}</h2>
            <p><em>{data["Scientific Name"]}</em></p>
            <img src={data["Species Illustration Photo"].src} alt={data["Species Illustration Photo"].alt} title={data["Species Illustration Photo"].title}/>
            <hr />
            <ButtonControl  displayText={saved ? "saved" : "save"} clickHandler={handleSave} />
           </div>
}

export default FishCard;