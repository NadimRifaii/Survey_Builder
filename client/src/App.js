import './App.css';
import AuthPage from './pages/authPage/auth-page.component';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/auth' element={<AuthPage />} />
    </Routes>
  );
}

export default App;
