import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Routes } from './Routes';
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div>
      <Routes/>
    </div>
    </Provider>
  );
}

export default App;
