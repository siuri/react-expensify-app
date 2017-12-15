import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
     });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'has note value' });
    expect(action).toEqual({
        'id': '123abc',
        'type': 'EDIT_EXPENSE',
        'updates': { note: 'has note value' }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'description', 
        note: 'note', 
        amount: 3000, 
        createdAt: 3333 
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        expense : {
            ...expenseData,
            id: expect.any(String)
        },
        type: 'ADD_EXPENSE'
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        expense : {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        },
        type: 'ADD_EXPENSE'
    });
});