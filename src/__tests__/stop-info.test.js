import React from 'react';
import { render } from '@testing-library/react';
import StopInfo from '../components/stop-info';
import { route } from './route-test-data';
import { sleep } from '../utils';
import 'jest-styled-components';

const { stopName, direction } = route;

describe('StopInfo', () => {
  it('displays name and direction', () => {
    const { container } = render(<StopInfo name={stopName} direction={direction} />);
    expect(container.textContent).toMatchInlineSnapshot(`"Harvard➔ Northbound"`);
  });

  it('displays cleaned name if it contains @', () => {
    const { container } = render(<StopInfo name="One @ Two" direction={direction} />);
    expect(container.textContent).toMatch('Two');
    expect(container.textContent).not.toMatch('One');
  });

  it('passes color to color pill', () => {
    const { getByTestId } = render(<StopInfo color="red" />);
    expect(getByTestId('color-pill')).toHaveStyleRule('background-color', '#red');
  });

  it('passes text color to stop name', () => {
    const { getByTestId } = render(<StopInfo textColor="white" />);
    expect(getByTestId('stop-name')).toHaveStyleRule('color', '#white');
  });

  it('displays only first letter if props.isCompact goes from false to true', () => {
    const { container, rerender } = render(<StopInfo name="Harvard" isCompact={false} />);
    expect(container.textContent).toMatchInlineSnapshot(`"Harvard➔ "`);
    rerender(<StopInfo name="Harvard" isCompact />);
    expect(container.textContent).toMatchInlineSnapshot(`"H➔ "`);
  });

  it('displays full name again after a pause if props.isCompact goes from true to false', async () => {
    const { container, rerender } = render(<StopInfo name="Harvard" isCompact />);
    expect(container.textContent).toMatchInlineSnapshot(`"H➔ "`);
    rerender(<StopInfo name="Harvard" isCompact={false} />);
    expect(container.textContent).toMatchInlineSnapshot(`"H➔ "`);
    await sleep(100);
    expect(container.textContent).toMatchInlineSnapshot(`"Harvard➔ "`);
  });
});
