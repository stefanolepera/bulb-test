import moment from 'moment';
/**
 * Check whether a moment object is the end of the month.
 * Ignore the time part.
 * @param {moment} mmt
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
 * @param {moment} mmt1
 * @param {moment} mm2
 * @returns {number}
 */
export const getDiffInDays = (mmt1, mm2) => mmt1.diff(mm2, 'days');

/**
 * Return the number of days between the given moment object
 * and the end of the month of this moment object.
 * @param {moment} mmt
 * @return {number}
 */
export const getDaysUntilMonthEnd = mmt => getDiffInDays(moment.utc(mmt).endOf('month'), mmt);

/**
 * Return the formatted date for the given moment object
 * @param {string} date
 * @return {string}
 */
export const formatDate = date => moment.utc(date).format('YYYY-MM-DD');
