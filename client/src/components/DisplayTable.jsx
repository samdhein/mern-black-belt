import React, {useEffect, useState} from 'react';  
import axios from 'axios';
import {Link} from "react-router-dom"
import DeleteButton from './DeleteButton';
// grab info from backend (axios)
// display when loaded.(useEffect)


const DisplayTable = (props) => {

    const [pirates, setPirates] = useState(null)
    const [refresh, setRefresh] = useState(false)

    const reloadList = () =>{
        setRefresh(!refresh)
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates')
            .then(res=>setPirates(res.data))
            .catch(err=>console.log(err))
    },[refresh])

        return (
            <div>
                {/* <Link to='/pirates/new'>New Pirate</Link> */}
                {
                    pirates?(
                                    pirates.map((pirate, i)=>(  //note: parenthesis allow for an implicit return; curly braces requires explicit return 
                                                <div key={i}>
                                                    <h2>{pirate.name}</h2>
                                                    <div>
                                                        <img src={pirate.img_url} alt="pirate-image" height="100px"></img>
                                                    </div>
                                                    <button><Link to={`/pirates/${pirate._id}`}>View Pirate</Link></button>
                                                    <DeleteButton id={pirate._id} reloadList={reloadList} />
                                                </div>
                                    ))
                                
                    ):
                    <h2>Loading...</h2>
                }
            </div>
        )
}

export default DisplayTable;