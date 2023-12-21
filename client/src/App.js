import './App.css';
import AuthPage from './pages/authPage/auth-page.component';
import AuthComponent from './components/authComponent/auth.component';
import CreateSurvey from './components/createSurvey/create-survey.component';
import { Routes, Route } from 'react-router-dom'
import SurveysContainer from './components/surveysContainer/surveys-container.component';
function App() {
  return (
    <Routes>
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/home' element={<AuthComponent />}>
        <Route index element={<SurveysContainer />} />
      </Route>
      <Route path='create-survey' element={<CreateSurvey />} />
    </Routes>
  );
}

export default App;
