import React, { Component, lazy, Suspense } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
} from 'reactstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }



  render() {

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>Dashboard</CardHeader>
          <CardBody>
            <Col>
              <Col><h3>1. Paypal Address :</h3></Col>
              <Col>
                <Col><h5> prodev2012@outlook.com</h5></Col>
              </Col>
              <Col>
                <Col><h5> a326178298@outlook.com</h5></Col>
              </Col>
              <Col>
                <Col>
                  <h5> seniordev808@outlook.com</h5>
                </Col>
                <Col>
                  <h5>(Sub for a326178298@outlook.com)</h5>
                </Col>
              </Col>
              <Col>
                <Col><h5> webdeveloper0315@outlook.com</h5></Col>
              </Col>
            </Col>
            <Col>
              <Col><h3>2. Payoneer Address :</h3></Col>
              <Col>
                <Col><h5> a326178298@outlook.com</h5></Col>
              </Col>
              <Col>
                <Col><h5> webdeveloper0315@outlook.com</h5></Col>
              </Col>
            </Col>
            <Col>
              <Col><h3>3. Paypal Fee Checking site :</h3></Col>
              <Col>
                <Col><a href='https://salecalc.com/paypal?l=cn&r=0&e=4.4&f=0.30&m=0&c=0' >Go to SaleCalc.com</a></Col>
              </Col>
            </Col>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
