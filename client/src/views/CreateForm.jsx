import React, { useState } from 'react';
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom';

const CreateForm = () => {
// input with onChange - state
// submitHandler with onSubmit - axios
// send info to backend
// if successful: redirect
// if failed: validation

    const [name, setName] = useState("")
    const [img_url, setImg_url] = useState("")
    const [catch_phrase, setCatch_phrase] = useState("")
    const [treasure_chests, setTreasure_chests] = useState(null)
    const [crew_position, setCrew_position] = useState("")
    const [peg_leg, setPeg_leg] = useState(true)
    const [eye_patch, setEye_patch] = useState(true)
    const [hook_hand, setHook_hand] = useState(true)
    const [errors, setErrors] = useState([])
    const history = useHistory()
    

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/pirates', {name, img_url, catch_phrase, treasure_chests, crew_position, peg_leg, eye_patch, hook_hand})
        .then(res=>{
            console.log(res)
            history.push("/")
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors
            const errorArr = []
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })
    }

    const cancelHandler = () => {
        history.push("/")
    }

    // const errorHandler = () => {

    // }

    return (
        <div>
            <h2>Add Pirate</h2>
            <button type="button" onClick={cancelHandler}>Crew Board</button>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} />
                </p>
                <p>
                    <label>Image URL</label>
                    <input type="text" name="img_url" value={img_url} onChange={e=>setImg_url(e.target.value)} />
                </p>
                <p>
                    <label># of Treasure Chests</label>
                    <input type="number" name="treasure_chests" value={treasure_chests} onChange={e=>setTreasure_chests(e.target.value)} />
                </p>
                <p>
                    <label>Catch Phrase</label>
                    <input type="text" name="catch_phrase" value={catch_phrase} onChange={e=>setCatch_phrase(e.target.value)} />
                </p>
                    <label>Crew Position
                        <select value={crew_position} onChange={e=>setCrew_position(e.target.value)}>
                            <option></option>
                            <option>First Mate</option>
                            <option>Captain</option>
                            <option>Quarter Master</option>
                            <option>Boatswain</option>
                            <option>Powder Monkey</option>
                        </select>
                        </label>
                <p>
                    <label>Peg Leg?</label>
                    <input type="checkbox" name="peg_leg" checked={peg_leg} onChange={e=>setPeg_leg(!peg_leg)} />
                </p>
                <p>
                    <label>Eye Patch?</label>
                    <input type="checkbox" name="eye_patch" checked={eye_patch} onChange={e=>setEye_patch(!eye_patch)} />
                </p>
                <p>
                    <label>Hook Hand?</label>
                    <input type="checkbox" name="hook_hand" checked={hook_hand} onChange={e=>setHook_hand(!hook_hand)} />
                </p>
                <button disabled={name.length<1 || img_url.length<1 || treasure_chests<0 || catch_phrase.length<1 || crew_position.length<1}>Submit</button>
            </form>
            {
                errors.map((err, i)=>(
                    <p key={i}> {err}</p>
                ))
            }
        </div>
    )
}

export default CreateForm;