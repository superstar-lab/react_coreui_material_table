import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from 'reactstrap';
import DataTable from '../DataTable/PaymentHistoryDataTable/MatTable'

class PaymentHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      add: false,
    };

    this.toggleAdd = this.toggleAdd.bind(this);
  }

  toggleAdd() {
    this.setState({
      add: !this.state.add,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Modal isOpen={this.state.add} toggle={this.toggleAdd}
               className='modal-primary'>
          <ModalHeader toggle={this.toggleAdd}>Create</ModalHeader>
          <ModalBody>
            <Col>
              <Label>Amount*</Label>
              <Input type="text"></Input>
              <Label>Name*</Label>
              <Input type="text"></Input>
              <Label>Payment Address*</Label>
              <Input type="text"></Input>
              <Label>Date*</Label>
              <Input type="date"></Input>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleAdd}>Save</Button>
            <Button color="secondary" onClick={this.toggleAdd}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Card>
          <CardHeader>
            <Row>
              <Col md="1">PaymentHistory</Col>
              <Col md="1">
                <Button block color="primary" onClick={this.toggleAdd}>Add New</Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <DataTable/>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </div>
    );
  }
}

export default PaymentHistory;
