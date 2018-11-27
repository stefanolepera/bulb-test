import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils/DateUtil';

const Table = ({ meterReadings }) => (
  <div>
    <h2>Meter Readings</h2>
    <table>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Reading</th>
          <th>Unit</th>
        </tr>
        {meterReadings.map(reading => (
          <tr key={reading.readingDate}>
            <td>{formatDate(reading.readingDate)}</td>
            <td>{reading.cumulative}</td>
            <td>{reading.unit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Table.propTypes = {
  meterReadings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
