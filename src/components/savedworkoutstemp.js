import React, { useContext, useEffect, useState } from "react";
import { UsrCntxt } from "../contextThings";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../styles/style.css";

export default function Workouts() {
  const { value, setvalue } = useContext(UsrCntxt);
  let isLoggedIn = true;
  const [workouts, setworkouts] = useState([{}]);
  function getWorkouts() {
    axios
      .get(
        "http://localhost:5000/fitness-app-db0b5/us-central1/api/getworkouts",
        {
          params: {
            uid: value,
          },
        }
      )
      .then((res) => {
        setworkouts(res.data.workouts);
      });
  }

  useEffect(() => {
    if (value == undefined) {
      isLoggedIn = false;
    } else if (value == null) {
      isLoggedIn = false;
    } else {
      getWorkouts(value);
    }
  }, []);

  return (
    <div className="workouts">
      <Container>
          <Row>
        {/* <button onClick={getWorkouts}>HERE</button> */}
        {workouts.map((Workout, index) => {
          return (
              <Col lg={4} className="cardSpacing">
            <Card key={index} lg={4}>
              <Card.Body>
                <Card.Title>{Workout.workoutname}</Card.Title>
                <Card.Text>Created By: {Workout.createdby}</Card.Text>
              </Card.Body>
            </Card>
            </Col>
          );
        })}

        </Row>
      </Container>
    </div>
  );
}
