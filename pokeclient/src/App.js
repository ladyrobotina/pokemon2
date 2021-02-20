import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Routes } from './Routes';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { DataProvider } from './Context/DataContext';



function App() {
  return (
    <Provider store={store}>
      <DataProvider>
         <Routes/>
      </DataProvider>
    </Provider>
  );
}

export default App;
