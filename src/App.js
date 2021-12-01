import { Provider } from 'react-redux';
import QuoteMachine from './quoteMachine/QuoteMachine';
import { store } from './store/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <QuoteMachine />
      </div>
    </Provider>
  );
}

export default App;
