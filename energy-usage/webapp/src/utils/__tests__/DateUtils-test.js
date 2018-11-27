import moment from 'moment';
import { isEndOfMonth, getDiffInDays, getDaysUntilMonthEnd, formatDate } from '../DateUtil';

const diff = 3;
const dates = {
  date1: moment('2017-03-31T00:00:00.000Z'),
  date2: moment('2017-03-28T00:00:00.000Z'),
};

describe('DateUtils test', () => {
  it('isEndOfMonth should return true if the moment passed is actually the end of the month', () => {
    expect(isEndOfMonth(dates.date1)).toEqual(true);
  });

  it('isEndOfMonth should return false if the moment passed is not the end of the month', () => {
    expect(isEndOfMonth(dates.date2)).toEqual(false);
  });

  it('getDiffInDays should return a number', () => {
    expect(typeof getDiffInDays(dates.date1, dates.date2)).toBe('number');
  });

  it('getDiffInDays should return the correct difference in days', () => {
    expect(getDiffInDays(dates.date1, dates.date2)).toEqual(diff);
  });

  it('getDaysUntilMonthEnd should return a number', () => {
    expect(typeof getDaysUntilMonthEnd(dates.date2)).toBe('number');
  });

  it('getDaysUntilMonthEnd should return the correct number of days till the end of the month', () => {
    expect(getDaysUntilMonthEnd(dates.date2)).toEqual(diff);
  });

  it('formatDate should return a string', () => {
    expect(typeof formatDate(dates.date2)).toBe('string');
  });

  it('formatDate should return a formatted date containing year-month-day', () => {
    expect(formatDate(dates.date2).split('-').length).toEqual(diff);
  });
});

