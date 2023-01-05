import React, {useState} from 'react';
import { ButtonControl } from '..';
import { useSelector, useDispatch } from "react-redux";
import { saveFish, forgetFish} from "../../actions"

const FishCard = ({ data }) => {

    const saved = useSelector(state => state.savedFish.some(f => f["Scientific Name"] == data["Scientific Name"]))

    const dispatch = useDispatch()
    const handleSave = () => {
        if (saved) {
            dispatch(forgetFish(data));
        }else{
            dispatch(saveFish(data));
        }
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