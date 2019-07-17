import React from "react";
// import Container from 'react-bootstrap/Container'
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Subtotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      EstimatedTotal: 0
    };
  }

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.EstimatedTotal.toFixed(2)} />
        </Container>
      </div>
    );
  }
}

export default App;
