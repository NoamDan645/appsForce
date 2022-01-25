
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from "./redux/Store.js"
import UsersList from './components/UsersList'
import Header from './components/Header.js';
function App() {
  return (
    <div className="App" style={{ 
      backgroundColor:"#fefbd8"
    }}>
      <div className='container'>
        <Header/>
      <Provider store={store}>
        <UsersList />
      </Provider >
      </div>
    </div>
  );
}

export default App;
