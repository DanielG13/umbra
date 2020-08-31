import React from "react";
import  { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { list } from '../redux/actions/user.action';
import PropTypes from 'prop-types'
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCheck, faLock } from "@fortawesome/free-solid-svg-icons";
const columns = [
  {
    name: 'ID',
    selector: 'user.id',
    sortable: true,
  },
  {
    name: 'NAME',
    selector: 'user.name',
    sortable: true,
  },
  {
    name: 'LAST NAME',
    selector: 'user.last_name',
    sortable: true,
  },
  {
    name: 'PHONE NUMBER',
    selector: 'user.phone_number',
    sortable: true,
  },
  {
    name: 'USERNAME',
    selector: 'user.username',
    sortable: true,
  },
  {
    name: 'EMAIL',
    selector: 'user.email',
    sortable: true,
  },
  {
    name: 'ROLE',
    selector: 'role.name',
    sortable: true,
  },
  {
    name: 'CREATED AT',
    selector: 'user.createdAt',
    sortable: true,
  },
  {
    name: 'STATE',
    sortable: true,
    cell: row => row.user.state == 1 ? <span class="tag is-success">Active</span> : <span class="tag is-danger">Inactive</span>
  },
  {
    name: 'ACTION',
    sortable: true,
    cell: row => <button class="button is-small"><span class="icon"><FontAwesomeIcon icon={faLock} /></span></button>
  },
];

class DataTableUserComponent extends  React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    //this.handleChange = this.handleChange.bind(this);
  }

   async componentDidMount() {
     let data = await this.props.list();
     this.setState({data: data.data.User})
  }

  render() {
    return (
      <DataTable
        columns={columns}
        data={this.state.data}
      />
    );
  }
}

DataTableUserComponent.propTypes = {
  list: PropTypes.func.isRequired
}



export default withRouter(connect(null, { list })(DataTableUserComponent));
