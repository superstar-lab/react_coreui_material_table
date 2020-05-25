import React, { PureComponent } from 'react';
import {Button, Card, CardBody, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import MatTableHead from './MatTableHead';
import MatTableToolbar from './MatTableToolbar';

let counter = 0;

function createData(amount, realamount, name, paymenthistory, comment, date) {
  counter += 1;
  return {
    id: counter, amount, realamount, name, paymenthistory, comment, date,
  };
}

function getSorting(order, orderBy) {
  if (order === 'desc') {
    return (a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return -1;
      }
      if (a[orderBy] > b[orderBy]) {
        return 1;
      }
      return 0;
    };
  }
  return (a, b) => {
    if (a[orderBy] > b[orderBy]) {
      return -1;
    }
    if (a[orderBy] < b[orderBy]) {
      return 1;
    }
    return 0;
  };
}

export default class MatTable extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: new Map([]),
      data: [
        createData(800, 750, 'Eclair', 'Paypal - a326178298@outlook.com', 'Wendy', '2020-04-20'),
        createData(800, 750, 'Ivan', 'Paypal - a326178298@outlook.com', 'Wendy', '2020-04-21'),
        createData(800, 750, 'Dmitry', 'Paypal - a326178298@outlook.com', 'Wendy', '2020-04-11'),
        createData(800, 750, 'Maksym', 'Paypal - a326178298@outlook.com', 'Wendy', '2020-04-23'),
        createData(800, 750, 'Talas', 'Paypal - a326178298@outlook.com', 'Wendy', '2020-04-09'),
        createData(800, 750, 'Andrey', 'Paypal - a326178298@outlook.com', 'Wendy', '2020-04-15'),
        createData(800, 750, 'Alex', 'Paypal - a326178298@outlook.com', 'Wendy', '2020-04-24'),
        createData(800, 750, 'Dzmitry', 'Paypal - a326178298@outlook.com', 'Wendy', '2020-04-26'),
        createData(800, 750, 'Erik', 'Paypal - a326178298@outlook.com', 'Wendy', '2020-04-30'),
        createData(800, 750, 'Anton', 'Paypal - a326178298@outlook.com', 'Wendy', '2020-04-11'),
        createData(800, 750, 'Antoni', 'Paypal - a326178298@outlook.com', 'Wendy', '2020-04-05'),
        createData(800, 750, 'Pavel', 'Paypal - a326178298@outlook.com', 'Wendy', '2020-04-03'),
        createData(800, 750, 'Michal', 'Paypal - a326178298@outlook.com', 'Wendy', '2020-04-01'),
      ],
      page: 0,
      rowsPerPage: 5,
      edit: false,
      delete: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';
    const { orderBy: stateOrderBy, order: stateOrder } = this.state;

    if (stateOrderBy === property && stateOrder === 'desc') { order = 'asc'; }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      const { data } = this.state;
      const newSelected = new Map();
      data.map(n => newSelected.set(n.id, true));
      this.setState({ selected: newSelected });
      return;
    }
    this.setState({ selected: new Map([]) });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const newSelected = new Map(selected);
    const value = newSelected.get(id);
    let isActive = true;
    if (value) {
      isActive = false;
    }
    newSelected.set(id, isActive);
    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleDeleteSelected = () => {
    const { data } = this.state;
    let copyData = [...data];
    const { selected } = this.state;

    for (let i = 0; i < [...selected].filter(el => el[1]).length; i += 1) {
      copyData = copyData.filter(obj => obj.id !== selected[i]);
    }

    this.setState({ data: copyData, selected: new Map([]) });
  };

  isSelected = (id) => {
    const { selected } = this.state;
    return !!selected.get(id);
  };

  onEdit() {
    this.toggleEdit();
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit,
    });
  }

  onDelete() {
    this.toggleDelete();
  }

  toggleDelete() {
    this.setState({
      delete: !this.state.delete,
    });
  }

  render() {
    const {
      data, order, orderBy, selected, rowsPerPage, page,
    } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - (page * rowsPerPage));

    return (
      <Col md={12} lg={12}>
        <Modal isOpen={this.state.edit} toggle={this.toggleEdit}
               className='modal-success'>
          <ModalHeader toggle={this.toggleEdit}>Edit</ModalHeader>
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
            <Button color="success" onClick={this.toggleEdit}>Edit</Button>
            <Button color="secondary" onClick={this.toggleEdit}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.delete} toggle={this.toggleDelete}
               className='modal-danger'>
          <ModalHeader toggle={this.toggleDelete}>Delete</ModalHeader>
          <ModalBody>
            <Col>
              <Label>Are you sure you want to delete?</Label>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggleDelete}>Delete</Button>
            <Button color="secondary" onClick={this.toggleDelete}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Card>
          <CardBody>
            <div className="material-table__wrap">
              <Table className="material-table">
                <MatTableHead
                  numSelected={[...selected].filter(el => el[1]).length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={this.handleSelectAllClick}
                  onRequestSort={this.handleRequestSort}
                  rowCount={data.length}
                />
                <TableBody>
                  {data
                    .sort(getSorting(order, orderBy))
                    .slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage)
                    .map((d, index) => {
                      const isSelected = this.isSelected(d.id);
                      return (
                        <TableRow
                          className="material-table__row"
                          role="checkbox"
                          onClick={event => this.handleClick(event, d.id)}
                          aria-checked={isSelected}
                          tabIndex={-1}
                          key={d.id}
                          selected={isSelected}
                        >
                          <TableCell
                            className="material-table__cell material-table__cell-right material-text-align"
                            component="th"
                            scope="row"
                            padding="none"
                          >
                            {rowsPerPage - index}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell-right material-text-align"
                            component="th"
                            scope="row"
                            padding="none"
                          >
                            {d.amount}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell-right material-text-align"
                          >{d.realamount}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell-right material-text-align"
                          >{d.name}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell-right material-text-align"
                          >{d.paymenthistory}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell-right material-text-align"
                          >{d.comment}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell-right material-text-align"
                          >{d.date}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell-right material-text-align"
                          >
                            <Row>
                              <Col>
                                <Button color="success" id={d.id}><i className="fa fa-edit" onClick={() => this.onEdit()}></i></Button>
                              </Col>
                              <Col>
                                <Button color="danger" id={d.id}><i className="fa fa-eraser" onClick={() => this.onDelete()}></i></Button>
                              </Col>
                            </Row>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 49 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <TablePagination
              component="div"
              className="material-table__pagination"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{ 'aria-label': 'Previous Page' }}
              nextIconButtonProps={{ 'aria-label': 'Next Page' }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 15, 20, 50, 100]}
              dir="ltr"
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
            />
          </CardBody>
        </Card>
      </Col>
    );
  }
}
