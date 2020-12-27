import React, { useContext, useEffect, useState} from 'react';
import {UsrCntxt} from '../contextThings';
import axios from 'axios';


export default function Workouts() {
    const {value, setvalue} = useContext(UsrCntxt);
    let isLoggedIn = true;
    const [workouts, setworkouts] = useState([{}]);
    function getWorkouts() {
        axios.get('http://localhost:5000/fitness-app-db0b5/us-central1/api/getworkouts', {
            params: {
                uid: value
            }
        }).then((res) => {
            setworkouts(res.data.workouts);
        
        })
    }

    useEffect(() => {
        if(value == undefined) {

            isLoggedIn = false;
        } else if (value == null) {
         
            isLoggedIn = false;
        } else {
            getWorkouts(value);
        }
        
        
        }, []);
    

    return (
        <div className="workouts">
           {/* <button onClick={getWorkouts}>HERE</button> */}
            {workouts.map((anObjectMapped, index) => {
                return (
                    <p key={index}>
            {anObjectMapped.workoutname} - {anObjectMapped.createdby}
        </p>
                )
            })} 
           
            
           
        </div>
    );
}