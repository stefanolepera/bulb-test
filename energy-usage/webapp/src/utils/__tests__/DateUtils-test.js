import { isEndOfMonth, getDiffInDays, getDaysUntilMonthEnd, formatDateYMD, formatDateMY } from '../DateUtil';

const diff = 3;
const dates = {
  date1: '2017-03-31T00:00:00.000Z',
  date2: '2017-03-28T00:00:00.000Z',
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

  it('formatDateYMD should return a string', () => {
    expect(typeof formatDateYMD(dates.date2)).toBe('string');
  });

  it('formatDateYMD should return a formatted date containing year-month-day', () => {
    expect(formatDateYMD(dates.date2).split('-').length).toEqual(diff);
  });

  it('formatDateMY should return a string', () => {
    expect(typeof formatDateMY(dates.date1)).toBe('string');
  });

  it('formatDateMY should return a formatted date containing only month and year', () => {
    expect(formatDateMY(dates.date1).split(',').length).toEqual(2);
  });

  it('formatDateMY should return a formatted month containing only 3 chars', () => {
    expect(formatDateMY(dates.date1).split(',')[0]).toHaveLength(3);
  });
});

