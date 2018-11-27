import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import data from '../../data/../../data/meterReadingsSample.json';
import Table from '../index';

describe('<Table /> test', () => {
  it('Test snapshots of content', () => {
    const wrapper = shallow(<Table meterReadings={data.electricity} />);

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
