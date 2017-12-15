import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesListItem from './ExpensesListItem';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;