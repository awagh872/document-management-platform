const initialState = {
    documents: []
  };
  
  const documentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_DOCUMENTS':
        return {
          ...state,
          documents: action.payload
        };
      case 'UPLOAD_DOCUMENT':
        return {
          ...state,
          documents: [...state.documents, action.payload]
        };
      case 'DELETE_DOCUMENT':
        return {
          ...state,
          documents: state.documents.filter(doc => doc.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default documentReducer;
  