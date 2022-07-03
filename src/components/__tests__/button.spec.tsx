import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { vi } from 'vitest';

import { Button } from '../button';

describe('<Button />', () => {
  it('should render a button element', () => {
    const { getByRole } = render(<Button />);

    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should render a button with passed text', () => {
    const { getByText } = render(<Button>Hello World</Button>);

    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('should render a button with the passed props', () => {
    const { getByRole } = render(<Button id="test-id" aria-label="my aria label" />);

    const element = getByRole('button');

    expect(element).toHaveAttribute('id', 'test-id');
    expect(element).toHaveAttribute('aria-label', 'my aria label');
  });

  it('should execute the function whe the button is clicked', async () => {
    const spyFunction = vi.fn();
    const user = userEvent.setup();

    const { getByRole } = render(<Button onClick={spyFunction} />);

    await user.click(getByRole('button'));

    expect(spyFunction).toBeCalledTimes(1);
  });

  it('should not execute the onClick function when the button has attribute disabled', async () => {
    const spyFunction = vi.fn();
    const user = userEvent.setup();

    const { getByRole } = render(<Button onClick={spyFunction} disabled />);

    await user.click(getByRole('button'));

    expect(spyFunction).toBeCalledTimes(0);
  });
});
