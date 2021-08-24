import { Provider } from 'react-redux';
import { store } from './redux';
import './app.css';
import ShowProv from './components/ShowProv/index';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <ShowProv />
      </Provider>
    </div>
  );
}

export default App;