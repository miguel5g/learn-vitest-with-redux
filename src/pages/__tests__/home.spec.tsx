import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '../../utils/test-utils';
import { Home } from '../home';

describe('<Home />', () => {
  it('should render a counter', () => {
    const { getByTestId, getByRole, getAllByRole } = renderWithProviders(<Home />);

    expect(getByTestId('counter')).toHaveTextContent('0');
    expect(getAllByRole('button').length).toBe(4);
    expect(getByRole('spinbutton')).toBeInTheDocument();
  });

  it('should increment counter when increment button is clicked', async () => {
    const user = userEvent.setup();

    const { getByTestId } = renderWithProviders(<Home />);

    expect(getByTestId('counter')).toHaveTextContent('0');

    await user.click(getByTestId('counter-increment'));

    expect(getByTestId('counter')).toHaveTextContent('1');

    await user.click(getByTestId('counter-increment'));
    await user.click(getByTestId('counter-increment'));

    expect(getByTestId('counter')).toHaveTextContent('3');
  });

  it('should decrement counter when decrement button is clicked', async () => {
    const user = userEvent.setup();

    const { getByTestId } = renderWithProviders(<Home />);

    expect(getByTestId('counter')).toHaveTextContent('0');

    await user.click(getByTestId('counter-decrement'));

    expect(getByTestId('counter')).toHaveTextContent('-1');

    await user.click(getByTestId('counter-decrement'));
    await user.click(getByTestId('counter-decrement'));

    expect(getByTestId('counter')).toHaveTextContent('-3');
  });

  it('should reset counter when reset button is clicked', async () => {
    const user = userEvent.setup();

    const { getByTestId } = renderWithProviders(<Home />);

    expect(getByTestId('counter')).toHaveTextContent('0');

    await user.click(getByTestId('counter-increment'));

    expect(getByTestId('counter')).toHaveTextContent('1');

    await user.click(getByTestId('counter-reset'));

    expect(getByTestId('counter')).toHaveTextContent('0');
  });

  it('should increment counter by size when increment by size button is clicked', async () => {
    const user = userEvent.setup();

    const { getByTestId } = renderWithProviders(<Home />);

    expect(getByTestId('counter')).toHaveTextContent('0');

    await user.type(getByTestId('counter-increment-input'), '13');
    await user.click(getByTestId('counter-increment-size'));

    expect(getByTestId('counter')).toHaveTextContent('13');

    await user.click(getByTestId('counter-increment-size'));
    await user.click(getByTestId('counter-increment-size'));

    expect(getByTestId('counter')).toHaveTextContent('39');
  });
});
