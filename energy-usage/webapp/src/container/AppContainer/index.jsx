import React from 'react';
import Chart from '../../components/Chart';
import Table from '../../components/Table';
import fetchData from '../../utils/Network';
import { fetchResolve, fetchReject } from '../../utils/StateChange';

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
    fetchData()
      .then(res => this.handleFetchResolve(res))
      .catch(err => this.handleFetchReject(err));
  }

  handleFetchResolve(res) {
    this.setState(fetchResolve(res));
  }

  handleFetchReject(err) {
    this.setState(fetchReject(err));
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
