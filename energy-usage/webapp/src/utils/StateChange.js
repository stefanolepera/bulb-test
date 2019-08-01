import { getEstimateEnergyUsage } from './EnergyUsageConverter';

export const fetchResolve = res => () => ({
  energyUsageData: getEstimateEnergyUsage(res.data.electricity),
  meterReadings: res.data.electricity,
  isDataLoaded: res !== undefined,
});

export const fetchReject = err => () => ({
  isDataError: err !== undefined,
});
