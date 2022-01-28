import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
// import CreateForm from '../components/CreateForm';
import DisplayTable from '../components/DisplayTable';

// get info from backend (axios)
// get info when loading (useEffect)
// variable will change when we get the data from backend (state)

const Main = ( ) => {

    const [message, setMessage] = useState("Loading...")
    const [refresh, setRefresh] = useState(false)

    const reloadList = () =>{
        setRefresh(!refresh)
    }
    

//index route
useEffect(()=>{
    axios.get('http://localhost:8000/api')
        .then(res=>setMessage(res.data.message))
        .catch(err=>console.log(err))
},[])

    return (
        <div>
            <div>
                <h2>Pirate Crew</h2>
                <Link to='/pirates/new'>Add Pirate</Link>
            </div>
                {/* <h2>Message from backend: {message} </h2> */}
            <DisplayTable refresh={refresh} reloadList={reloadList}/>
        </div>
    );
}

export default Main;
