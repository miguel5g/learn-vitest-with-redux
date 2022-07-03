import { Provider } from 'react-redux';

import { Home } from './pages/home';
import { setupStore } from './redux/store';

export const App: React.FC = () => {
  return (
    <Provider store={setupStore()}>
      <Home />
    </Provider>
  );
};
