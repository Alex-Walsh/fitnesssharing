import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import runningGirl from './pictures/runningGirl.jpg';
// import Girl from './pictures/girl.jpg';
import guyWorkingOut from './pictures/guyworkout.jpg';
import './homepage.css';
import { Link} from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      
      <Container>
        <Row className="mainContainer">
          <Nav>
          <Link to="/savedWorkouts">
          <Col xs={12}sm={4} lg={4}>
      <Card className="bg-dark text-black">
  <Card.Img src={runningGirl} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Saved Workouts</Card.Title>
  </Card.ImgOverlay>
</Card>
</Col>
</Link>
</Nav>
<Col xs={12} sm={4} lg={4}>
<Card className="bg-dark text-black">
  <Card.Img src={guyWorkingOut} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Feed</Card.Title>
  </Card.ImgOverlay>
</Card>
</Col>
<Col xs={12} sm={4} lg={4}>
<Card className="bg-dark text-black">
  <Card.Img src={guyWorkingOut} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Other</Card.Title>  
  </Card.ImgOverlay>
</Card>
</Col>
</Row>
</Container>
    );
  }
}