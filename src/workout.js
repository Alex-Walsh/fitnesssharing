import { Button } from 'react-bootstrap';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Workout(props){
const location = useLocation();
function printProps() {
    console.log(location.data.workoutid);
}

    return (
        <div>
            <Button onClick={printProps}>Click Here</Button>
        </div>
    );
}