import React from "react";
import  { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { list } from '../redux/actions/apartment.action';
import { gestion } from '../redux/actions/apartment.action';
import { deleted } from '../redux/actions/apartment.action';
import PropTypes from 'prop-types'
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen, faLock, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";


class DataTableAptComponent extends  React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      columns: [
        {
          name: 'ID',
          selector: 'apt.id',
          sortable: true,
        },
        {
          name: 'NAME',
          selector: 'apt.name',
          sortable: true,
        },
        {
          name: 'TIPO',
          selector: 'apt.tipo',
          sortable: true,
        },
        {
          name: 'AREA CONST',
          selector: 'apt.area_const',
          sortable: true,
        },
        {
          name: 'AREA BALCON',
          selector: 'apt.area_balcon',
          sortable: true,
        },
        {
          name: 'AREA CONST + BALCON',
          selector: 'apt.area_const_balcon',
          sortable: true,
        },
        {
          name: 'AREA PRIV',
          selector: 'apt.area_priv',
          sortable: true,
        },
        {
          name: 'LEVEL',
          selector: 'piso.id',
          sortable: true,
        },
        {
          name: 'BUILD',
          selector: 'torre[0].id',
          sortable: true,
        },
        {
          name: 'STATE',
          sortable: true,
          cell: row => row.apt.state == 1 ? <span className="tag is-success">DISPONIBLE</span> : <span className="tag is-danger">RESERVADO</span>
        },
        {
          name: 'GESTION',
          sortable: true,
          cell: row => row.apt.state == 1 ? <div><button className="button is-small" onClick={(e) => this.handleClick(row.apt.id, 0 )}><span className="icon"><FontAwesomeIcon icon={faLock} /></span></button> <button className="button is-small" onClick={(e) => this.handleDelete(row.apt.id)}><span className="icon"><FontAwesomeIcon icon={faTrashAlt} /></span></button> <button className="button is-small" onClick={(e) => this.openModal(row)}><span className="icon"><FontAwesomeIcon icon={faEdit} /></span></button>  </div>
          : <div><button className="button is-small" onClick={(e) => this.handleClick(row.apt.id, 1 )}><span className="icon"><FontAwesomeIcon icon={faLockOpen} /></span></button> <button className="button is-small" onClick={(e) => this.handleDelete(row.apt.id)}><span className="icon"><FontAwesomeIcon icon={faTrashAlt} /></span></button> <button className="button is-small" onClick={(e) => this.openModal(row)}><span className="icon"><FontAwesomeIcon icon={faEdit} /></span></button> </div>
        },
      ]
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

   async componentDidMount() {
     let data = await this.props.list();
     this.setState({data: data.data.apartamento})
  }

  handleClick = (id, state) => {
     this.props.gestion(id, state).then(
       () => {
         window.location.reload();
       },
       error => {
         alert("error")
       }
     );
  }

  handleDelete = (id) => {
     this.props.deleted(id).then(
       () => {
         window.location.reload();
       },
       error => {
         alert("error")
       }
     );
  }

  closeModal = () => {
    this.setState({modalUpdatedClass: 'modal'})
  }

  openModal = (e) => {
    this.setState({modalUpdatedClass: 'modal is-active', aptData: e})
  }

  render() {
    const { data, columns, modalUpdatedClass, aptData } = this.state;

    function ModalUpdate(props) {
      console.log(props.data);
      return (
        <div className={props.class}>
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Apartment Edit</p>
        <button className="delete" aria-label="close" onClick={props.close}></button>
      </header>
      <section className="modal-card-body">

      </section>
      <footer className="modal-card-foot">
        <button className="button is-success">Save changes</button>
      </footer>
    </div>
  </div>
      );
    }

    return (
      modalUpdatedClass == 'modal is-active' ? <ModalUpdate class="modalUpdatedClass" close={(e) => this.closeModal()} data={aptData} />
      : <DataTable
        columns={columns}
        data={data}
      />
    );
  }
}

DataTableAptComponent.propTypes = {
  list: PropTypes.func.isRequired
}

DataTableAptComponent.propTypes = {
  gestion: PropTypes.func.isRequired
}

DataTableAptComponent.propTypes = {
  deleted: PropTypes.func.isRequired
}



export default withRouter(connect(null, { list, gestion, deleted })(DataTableAptComponent));
