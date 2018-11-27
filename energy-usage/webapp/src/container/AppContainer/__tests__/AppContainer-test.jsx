import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AppContainer from '../index';

describe('<AppContainer /> test', () => {
  it('Test snapshots of content', () => {
    const wrapper = shallow(<AppContainer />);

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should call componentDidMount', () => {
    sinon.spy(AppContainer.prototype, 'componentDidMount');
    mount(<AppContainer />);

    expect(AppContainer.prototype.componentDidMount).toHaveProperty('callCount', 1);
    AppContainer.prototype.componentDidMount.restore();
  });
});
