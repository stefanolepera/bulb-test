import { getEstimateEndOfMonthUsage, getEstimateEnergyUsage } from '../EnergyUsageConverter';
import data from '../../data/meterReadingsSample.json';

describe('getEstimateEndOfMonthUsage test', () => {
  it('getEstimateEndOfMonthUsage should return an object', () => {
    expect(typeof getEstimateEndOfMonthUsage(data)).toBe('object');
  });

  it('getEstimateEndOfMonthUsage should return a string date', () => {
    expect(typeof getEstimateEndOfMonthUsage(data.electricity)[0].date).toBe('string');
  });

  it('getEstimateEndOfMonthUsage should return an estimateEndMonth number', () => {
    expect(typeof getEstimateEndOfMonthUsage(data.electricity)[0].estimateEndMonth).toBe('number');
  });

  it('getEstimateEnergyUsage should return an array with 2 less elements compared to the dataset (not estimate at the edge of the dataset)', () => {
    expect(getEstimateEnergyUsage(data.electricity).length).toEqual(data.electricity.length - 2);
  });
});

