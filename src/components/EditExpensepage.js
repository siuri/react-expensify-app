import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import Modal from 'react-modal';

Modal.setAppElement('#app');
export class EditExpensePage extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openRemoveModal = this.openRemoveModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openRemoveModal = (expense) =>  {
    this.setState({modalIsOpen: true, expense: this.props.expense.id});
  }
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    const subtitle = 'Are you sure you want to remove expense?';
    return (
      <div className="page-body" id="edit">
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header-title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Remove Expense Modal"
            closeTimeoutMS={200}
            className="modal"
          >
          <h3 className="modal__title">{subtitle}</h3>
          <div className="modal__content">
            <button className="button button--danger" onClick={this.onRemove}>Remove</button>
            <button className="button button--secondary" onClick={this.closeModal}>close</button>
          </div>
        </Modal>
          <button className="button button--secondary" onClick={this.openRemoveModal}>Remove Expense</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);