import React, { Component } from 'react';
import './App.css';
import { Card, CardTitle,
 CardBody, Col, Row } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>


         <div className="Info-Container">
           <Row>

             {this.state.starwarsChars.map((chars) => {
               return (
            <Col md="4">
                <Card className="card" >
                    <CardBody>
                    <CardTitle tag="h3"> {chars.name} </CardTitle>
                      <CardTitle className="text-muted">
                        Birth Year: {chars.birth_year}
                      </CardTitle>
                      <CardTitle className="text-muted">
                            Gender: {chars.gender}
                      </CardTitle>
                      <CardTitle className="text-muted">
                        Hair Color: {chars.hair_color}
                      </CardTitle>
                      <CardTitle className="text-muted">
                        Eye Color: {chars.eye_color}
                      </CardTitle>
                      <CardTitle className="text-muted">
                        Height: {chars.height}
                      </CardTitle>
                      <CardTitle className="text-muted">
                        Mass: {chars.mass}
                      </CardTitle>
                  </CardBody>
                </Card>
              </Col>
            );
              })}
        </Row>
      </div>
   </div>
    );
  }
}

export default App;
