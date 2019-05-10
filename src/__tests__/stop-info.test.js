import React from 'react';
import { mount } from 'enzyme';
import byEnzymeId from 'get-by-enzyme-id';
import { StopInfo } from '../components/stop-info';
import { route } from './route-test-data';
import { wait } from '../utils';

const { stopName, direction } = route;

const getStopNameText = wrapper =>
  wrapper
    .find(byEnzymeId('stop-name'))
    .first()
    .text();

describe('StopInfo', () => {
  it('displays name and direction', () => {
    const wrapper = mount(<StopInfo name={stopName} direction={direction} />);
    expect(wrapper.text()).toMatchInlineSnapshot(`"Harvard➔ Northbound"`);
  });

  it('displays cleaned name if it contains @', () => {
    const wrapper = mount(<StopInfo name="One @ Two" direction={direction} />);
    expect(wrapper.text()).toMatch('Two');
    expect(wrapper.text()).not.toMatch('One');
  });

  it('passes color to color pill', () => {
    const wrapper = mount(<StopInfo color="red" />);
    const colorPill = wrapper.find(byEnzymeId('color-pill')).first();
    expect(colorPill.props().color).toBe('red');
  });

  it('passes text color to stop name', () => {
    const wrapper = mount(<StopInfo textColor="white" />);
    const colorPill = wrapper.find(byEnzymeId('stop-name')).first();
    expect(colorPill.props().textColor).toBe('white');
  });

  it('displays only first letter if props.isCompact goes from false to true', () => {
    const wrapper = mount(<StopInfo name="Harvard" isCompact={false} />);
    expect(getStopNameText(wrapper)).toBe('Harvard');
    wrapper.setProps({ isCompact: true });
    expect(getStopNameText(wrapper)).toBe('H');
  });

  it('displays full name again after a pause if props.isCompact goes from true to false', async () => {
    const wrapper = mount(<StopInfo name="Harvard" isCompact={false} />);
    wrapper.setProps({ isCompact: true });
    expect(getStopNameText(wrapper)).toBe('H');
    wrapper.setProps({ isCompact: false });
    expect(getStopNameText(wrapper)).toBe('H');
    await wait(100);
    expect(getStopNameText(wrapper)).toBe('Harvard');
  });
});
