import axios from 'axios';

export const getDocumentVersions = (documentId) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5173/documents/${documentId}/versions`);
    dispatch({ type: 'GET_DOCUMENT_VERSIONS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const uploadDocumentVersion = (documentId, file) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(`http://localhost:5173/documents/${documentId}/versions`, formData);
    dispatch({ type: 'UPLOAD_DOCUMENT_VERSION', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};