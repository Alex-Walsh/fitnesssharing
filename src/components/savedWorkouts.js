import React, { Component, useContext } from 'react';
import axios from 'axios';
import Ctx from './ctxtest';

export default class SavedWorkouts extends Component {
    state = {
      workouts: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:5000/fitness-app-db0b5/us-central1/api/test`, {
          params: {
              User: "alexwalsh350@gmail.com",
              Token: "f8hr4euifh4fnu43bfin",
          }
      })
        .then(res => {
          const result = res.data;
          this.setState({ workouts: result.workouts });
        })
    }

    
  
    render() {
      return (
        <div>
        <ul>
          { this.state.workouts.map(workout => <li key={workout}>{workout}</li>)}
        </ul>
        
        <Ctx />
        </div>
      )
    }
  }
