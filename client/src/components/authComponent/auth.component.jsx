import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { extractUserSlice } from '../../core/redux/user/userSlice.js';
import { useEffect, useState } from 'react';

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
  }, [user, navigate]);

  return authenticated ? role == 'user' ? <h1>Hello user</h1> : <h1>Hello admin</h1> : null
};
export default AuthComponent;
