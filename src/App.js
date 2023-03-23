import { ToastContainer } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import AllRoutes from './components/Pages/AllRoutes';
import ForgotPasswordModal from './components/Auth/ForgotPasswordModal';

function App() {
  return (
    <div>
      <ToastContainer />
      <ForgotPasswordModal />
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
