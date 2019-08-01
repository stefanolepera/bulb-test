import { getDiffInDays, getDaysUntilMonthEnd, isEndOfMonth, formatDateMY } from './DateUtil';

/**
 * Calculate the end of the month usage estimate
 * @param {array} data
 * @returns {array}
 */
export const getEstimateEndOfMonthUsage = (data) => {
  const estimateEndMonthUsage = [];
  for (let i = 0; i < data.length - 1; i += 1) {
    const energyUsage = data[i + 1].cumulative - data[i].cumulative;

    const formattedDate = formatDateMY(data[i].readingDate);
    let estimateEndMonth;

    // if its the end of the month we don't need to
    // do any calculations, just use the data for the estimation
    if (isEndOfMonth(data[i].readingDate)) {
      estimateEndMonth = data[i].cumulative;
    } else {
      // we get the number of days between the two readings
      const diffDays = getDiffInDays(data[i + 1].readingDate, data[i].readingDate);
      // we calculate the estimate per day in the given period
      const kWhPerDay = energyUsage / diffDays;
      // we get the partial estimation between the last reading of the month
      // and the end of the month and then we add the last reading to have a total
      // estimation for the last day of the month
      estimateEndMonth = (getDaysUntilMonthEnd(data[i].readingDate) * kWhPerDay) +
         data[i].cumulative;
    }

    estimateEndMonthUsage.push({
      date: formattedDate,
      estimateEndMonth,
    });
  }

  return estimateEndMonthUsage;
};

/**
 * Calculate the usage estimate for each month
 * @param {array} data
 * @returns {array}
 */
export const getEstimateEnergyUsage = (data) => {
  // we get the estimates for the last day of the month
  const estimateEndMonthUsage = getEstimateEndOfMonthUsage(data);
  const estimateUsage = [];
  for (let i = 1; i < estimateEndMonthUsage.length; i += 1) {
    // we get the estimate for the whole month subtracting the estimate
    // of the last day of the current month and the previous one
    const energyUsage = Math.round(estimateEndMonthUsage[i].estimateEndMonth -
      estimateEndMonthUsage[i - 1].estimateEndMonth);

    estimateUsage.push({
      date: estimateEndMonthUsage[i].date,
      energyUsage,
    });
  }

  return estimateUsage;
};
