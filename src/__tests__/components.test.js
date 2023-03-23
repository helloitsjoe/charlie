import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MinutesList from '../components/minutes-list';
import Error from '../components/error';
import Footer from '../components/footer';
import Header from '../components/header';
import Spacer from '../components/spacer';

describe('Error', () => {
  it('renders error if error is provided', () => {
    const mockErr = { message: 'sorryyy', stack: 'this is a stack' };
    const { container } = render(<Error error={mockErr} />);
    expect(container.textContent).toMatchInlineSnapshot(
      `"Error!sorryyythis is a stackOpen devtools for more information"`
    );
  });
});

describe('Footer', () => {
  it('renders hourOfDay if provided', () => {
    const { container } = render(<Footer hourOfDay={12} />);
    expect(container.textContent).toMatchInlineSnapshot(`"12"`);
  });
});

describe('Header', () => {
  it('renders refresh button', () => {
    const { container } = render(<Header reFetch={() => {}} />);
    expect(container.textContent).toMatchInlineSnapshot(`"REFRESH"`);
  });

  it('calls reFetch on button click', () => {
    const reFetch = jest.fn();
    const { getByText } = render(<Header reFetch={reFetch} />);
    expect(reFetch).not.toBeCalled();
    fireEvent.click(getByText('REFRESH'));
    expect(reFetch).toBeCalled();
  });
});

describe('Spacer', () => {
  it('renders text', () => {
    const { container } = render(<Spacer text="Blah" />);
    expect(container.textContent).toMatchInlineSnapshot(`"Blah"`);
  });
});

describe('MinutesList', () => {
  it('displays nothing if no minutes provided', () => {
    const { container } = render(<MinutesList mins={[]} />);
    expect(container.textContent).toMatchInlineSnapshot(`""`);
  });

  it('displays provided minutes', () => {
    const mins = [1, 4];
    const { container } = render(<MinutesList mins={mins} />);
    expect(container.textContent).toMatchInlineSnapshot(`"1min4min"`);
  });
});
