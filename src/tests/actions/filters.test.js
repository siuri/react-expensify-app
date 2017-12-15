import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('SHould generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('SHould generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('Should generate set text filter object with default value', () => {
    const filter = setTextFilter();
    expect(filter).toEqual({
        type: 'SET_FILTER',
        text: ''
    })
});

test('Should generate set text filter object with test value', () => {
    const text = 'something in'
    const filter = setTextFilter(text);
    expect(filter).toEqual({
        type: 'SET_FILTER',
        text
    })
});

test('Should generate action object for sort by date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
});

test('Should generate action object for sort by amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});