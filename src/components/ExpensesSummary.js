import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal, unFiltersExpenseCount }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const unFiltersExpenseWord = unFiltersExpenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenesTotal = numeral(expensesTotal / 100).format('$0x.00');

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header-title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpenesTotal}</span></h1>
                { unFiltersExpenseCount > 0 &&
                <div className="page-header-subtitle">Not showing <span>{unFiltersExpenseCount}</span> {unFiltersExpenseWord} because of filters </div>
                }
                <div className="page-header__sections">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        unFiltersExpenseCount: state.expenses.length - visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};


export default connect(mapStateToProps)(ExpensesSummary);