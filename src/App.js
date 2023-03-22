import { ToastContainer } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import AllRoutes from './components/Pages/AllRoutes';

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
