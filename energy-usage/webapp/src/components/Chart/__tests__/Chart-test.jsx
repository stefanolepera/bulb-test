import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import data from '../../data/../../data/meterReadingsSample.json';
import Chart from '../index';

describe('<Chart /> test', () => {
  it('Test snapshots of content', () => {
    const wrapper = shallow(<Chart energyUsageData={data.electricity} />);

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
