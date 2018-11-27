import React from 'react';
import Axios from 'axios';
import Chart from '../../components/Chart';
import Table from '../../components/Table';
import { getEstimateEnergyUsage } from '../../utils/EnergyUsageConverter';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      energyUsageData: [],
      meterReadings: [],
      isDataLoaded: false,
      isDataError: false,
    };
  }

  componentDidMount() {
    Axios.get('https://storage.googleapis.com/bulb-interview/meterReadingsReal.json')
      .then(res => this.setState({
        meterReadings: res.data.electricity,
        energyUsageData: getEstimateEnergyUsage(res.data.electricity),
        isDataLoaded: res !== undefined,
      }))
      .catch(err => this.setState({ isDataError: err !== undefined }));
  }

  render() {
    const {
      meterReadings, energyUsageData, isDataLoaded, isDataError,
    } = this.state;
    if (isDataLoaded) {
      return (
        <div >
          <Chart energyUsageData={energyUsageData} />
          <Table meterReadings={meterReadings} />
        </div >
      );
    }

    if (isDataError) {
      return <div>There is a problem loading the data, please try again</div>;
    }

    return (
      <div>Loading data...</div>
    );
  }
}

export default AppContainer;
