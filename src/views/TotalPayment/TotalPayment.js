import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Row,
  Col,
} from 'reactstrap';
import DataTable from '../DataTable/TotalPaymentDataTable/MatTable'

class TotalPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }



  render() {

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>TotalPayment</CardHeader>
          <CardBody>
            <Row>
              <Col md="5">
                <DataTable/>
              </Col>
              <Col md="7"/>
            </Row>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </div>
    );
  }
}

export default TotalPayment;
