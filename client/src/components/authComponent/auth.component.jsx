// hooks imports
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// functions imports
import { extractUserSlice } from '../../core/redux/user/userSlice.js';
// components imports
import Dashboard from '../../pages/dashboard/dashboard.component.jsx';
import UserHome from '../../pages/userHome/user-home.component.jsx';
const AuthComponent = () => {
  const user = useSelector(extractUserSlice);
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState('user')
  useEffect(() => {
    if (user.username !== '' && user.email !== '' && user.role !== '') {
      setAuthenticated(true);
      setRole(user.role)
    } else {
      setAuthenticated(false);
      navigate('/auth');
    }
  }, [user]);

  return authenticated ? role == 'user' ? <UserHome /> : <Dashboard /> : null
};
export default AuthComponent;
