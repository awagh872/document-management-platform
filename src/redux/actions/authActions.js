import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('//http:/localhost:5173/auth/login', userData);
    const { token } = response.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    const decoded = jwtDecode(token);
    dispatch(setCurrentUser(decoded));
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    await axios.post('http://localhost:5173/auth/register', userData);
  } catch (error) {
    console.error(error);
  }
};

export const setCurrentUser = (decoded) => ({
  type: 'SET_CURRENT_USER',
  payload: decoded
});

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};