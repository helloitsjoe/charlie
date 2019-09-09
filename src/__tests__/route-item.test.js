import React from 'react';
import { mount } from 'enzyme';
import RouteItem from '../components/route-item';
import { route } from './route-test-data';

describe('RouteItem', () => {
  const STOP_INFO = '#stop-info';
  const MINUTES_LIST = '#minutes-list';

  it('handles click on StopInfo', () => {
    const wrapper = mount(<RouteItem route={route} />);
    expect(wrapper.find(STOP_INFO).props().isCompact).toBe(false);
    wrapper.find(STOP_INFO).simulate('click');
    expect(wrapper.find(STOP_INFO).props().isCompact).toBe(true);
  });

  it('handles click on MinutesList', () => {
    const wrapper = mount(<RouteItem route={route} />);
    expect(wrapper.find(MINUTES_LIST).props().clicked).toBe(false);
    wrapper.find(MINUTES_LIST).simulate('click');
    expect(wrapper.find(MINUTES_LIST).props().clicked).toBe(true);
  });

  it('passes fields to StopInfo', () => {
    const wrapper = mount(<RouteItem route={route} />);
    expect(wrapper.find(STOP_INFO).props().color).toBe(route.color);
    expect(wrapper.find(STOP_INFO).props().textColor).toBe(route.textColor);
    expect(wrapper.find(STOP_INFO).props().direction).toBe(route.direction);
    expect(wrapper.find(STOP_INFO).props().name).toBe(route.customName);
  });

  it('passes stopName to StopInfo if no customName', () => {
    const { customName, ...rest } = route;
    const routeMissingCustom = rest;
    const wrapper = mount(<RouteItem route={routeMissingCustom} />);
    expect(wrapper.find(STOP_INFO).props().name).toBe(route.stopName);
  });
});
