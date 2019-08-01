import moment from 'moment';
/**
 * Check whether a moment object is the end of the month.
 * Ignore the time part.
 * @param {string} mmt
 * @returns {boolean}
 */
export const isEndOfMonth = mmt =>
  // startOf allows to ignore the time component
  // we call moment(mmt) because startOf and endOf mutate the momentj object.
  moment
    .utc(mmt)
    .startOf('day')
    .isSame(moment
      .utc(mmt)
      .endOf('month')
      .startOf('day'));

/**
 * Returns the difference between two moment objects in number of days.
 * @param {string} mmt1
 * @param {string} mm2
 * @returns {number}
 */
export const getDiffInDays = (mmt1, mm2) => moment.utc(mmt1).diff(mm2, 'days');

/**
 * Return the number of days between the given moment object
 * and the end of the month of this moment object.
 * @param {string} mmt
 * @return {number}
 */
export const getDaysUntilMonthEnd = mmt => getDiffInDays(moment.utc(mmt).endOf('month'), mmt);

/**
 * Return the formatted date for the given moment object YYYY-MM-DD
 * @param {string} date
 * @return {string}
 */
export const formatDateYMD = date => moment.utc(date).format('YYYY-MM-DD');

/**
 * Return the formatted date for the given moment object MMM, YYYY
 * @param {string} date
 * @return {string}
 */
export const formatDateMY = date => moment.utc(date).format('MMM, YYYY');
