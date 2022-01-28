import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// get ID from params
// with id, grab info from backend (axios)
// get the info when loaded (useEffect). Sometimes not, when we don't need anything upon loading. 
// info change (useState)

const Detail = ( ) => {

    const [pirate, setPirate] = useState("")
    const {id} = useParams()

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
        .then(res=>setPirate(res.data))
        .catch(err=>console.log(err))
    },[])

    return (
        <div>
            {
                pirate?(
                    <div>
                        <h1>{pirate.name}</h1>
                        <img src={pirate.img_url} alt="pirate-image" height="120px"></img>
                        <h2>{pirate.catch_phrase}</h2>
                        <h3>About</h3>
                        <h4>Position: {pirate.crew_position}</h4>
                        <h4>Treasure Chests: {pirate.treasure_chests}</h4>
                        <h4>Peg Leg: {pirate.peg_leg?(<p>Yes</p>): (<p>No</p>)}</h4>
                        <h4>Eye Patch: {pirate.eye_patch?(<p>Yes</p>): (<p>No</p>)}</h4>
                        <h4>Hook Hand: {pirate.hook_hand?(<p>Yes</p>): (<p>No</p>)}</h4>
                        {/* <DeleteButton id={product._id}/> */}
                    </div>
                ): (
                    <h1>Loading...</h1>
                )
            }
        </div>
    )
}
export default Detail;