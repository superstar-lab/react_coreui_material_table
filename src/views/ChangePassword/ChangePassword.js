import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  Label,
  Input,
} from 'reactstrap';

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }



  render() {

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>PaymentHistory</CardHeader>
          <CardBody>
            <Row className="change-password-padding">
              <Col md="2">
                <Label>Old Password</Label>
              </Col>
              <Col md="4">
                <Input type="text" />
              </Col>
              <Col md="6"/>
            </Row>
            <Row className="change-password-padding">
              <Col md="2">
                <Label>New Password</Label>
              </Col>
              <Col md="4">
                <Input type="text" />
              </Col>
              <Col md="6"/>
            </Row>
            <Row className="change-password-padding">
              <Col md="2">
                <Label>Confirm Password</Label>
              </Col>
              <Col md="4">
                <Input type="text" />
              </Col>
              <Col md="6"/>
            </Row>
          </CardBody>
          <CardFooter>
            <Row>
              <Col md="1">
                <Button block color="primary">Save</Button>
              </Col>
              <Col md="1">
                <Button block color="secondary">Cancel</Button>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default ChangePassword;
