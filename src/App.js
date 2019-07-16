import React from "react";
// import Container from 'react-bootstrap/Container'
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Subtotal from './components/Subtotal/Subtotal';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        total: 100
      };
    }

    render() {
    return (
    <div className="container">
      <Container className="purchase-card">
        <Subtotal price={this.state.total.toFixed(2)} />
      </Container>
    </div>
    );
  }
}

export default App;
