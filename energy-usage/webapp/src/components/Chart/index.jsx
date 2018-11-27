import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

const Chart = ({ energyUsageData }) => (
  <div>
    <h2>Energy Usage</h2>
    <BarChart width={1400} height={400} data={energyUsageData}>
      <XAxis dataKey="date" />
      <YAxis dataKey="energyUsage" />
      <CartesianGrid horizontal={false} />
      <Tooltip />
      <Bar
        dataKey="energyUsage"
        fill="#03ad54"
        isAnimationActive={false}
      />
    </BarChart>
  </div>
);

Chart.propTypes = {
  energyUsageData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Chart;
