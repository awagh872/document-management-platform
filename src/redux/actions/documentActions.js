import axios from 'axios';

export const getDocuments = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5173/documents');
    dispatch({ type: 'GET_DOCUMENTS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const uploadDocument = (documentData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5173/documents', documentData);
    dispatch({ type: 'UPLOAD_DOCUMENT', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteDocument = (documentId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5173/documents/${documentId}`);
    dispatch({ type: 'DELETE_DOCUMENT', payload: documentId });
  } catch (error) {
    console.error(error);
  }
};

export const searchDocuments = (searchTerm) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5173/documents?q=${searchTerm}`);
    dispatch({ type: 'SEARCH_DOCUMENTS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
