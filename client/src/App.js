import './App.css';
import AuthPage from './pages/authPage/auth-page.component';
import AuthComponent from './components/authComponent/auth.component';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/home' element={<AuthComponent />} >
      </Route>
    </Routes>
  );
}

export default App;
