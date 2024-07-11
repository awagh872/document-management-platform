import axios from 'axios';

export const getActivities = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5173/activities');
    dispatch({ type: 'GET_ACTIVITIES', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};