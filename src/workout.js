import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

//TODO: PERSIST WORKOUT DATA
export default function Workout(props){
const location = useLocation();
const [workoutdata, setworkoutdata] = useState([]);
const [workoutname, setworkoutname] = useState("");
const [workoutowner, setworkoutowner] = useState("");

function getWorkoutData(workoutid) {
    axios.get("http://localhost:5000/fitness-app-db0b5/us-central1/api/getWorkoutData", { 
        params: {
            workoutid: workoutid
        }
    })
    .then((res) => {
        let result = res.data.data;
        let zippedworkoutdata = createZippedArray(result.moves, result.reps, result.sets);
        setworkoutdata(zippedworkoutdata);
        setworkoutname(result.name);
        setworkoutowner(result.owner);
    })
    .catch((err) => {
        console.log(err);
    })
}

function createZippedArray(moves,reps,sets) {
    let final = [];
    let passes = moves.length;
    for(let i = 0; i < passes; i++) {
        let tempArray = [];
        tempArray.push(moves[i]);
        tempArray.push(reps[i]);
        tempArray.push(sets[i]);
        final.push(tempArray);
    }

    return final;
}


useEffect(() => {
    getWorkoutData(location.data.workoutid);
}, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} sm={12}>
                        <Card>
                            <Card.Title>{workoutname}</Card.Title>
                            <Card.Text>
                                {workoutowner}
                            </Card.Text>
                            <Card.Text>
                            {workoutdata.map(([movement, sets, reps]) => <li key={movement}>Movement: {movement} - Sets: {sets} - Repititions: {reps}</li>)}
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}