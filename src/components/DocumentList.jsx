import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteDocument } from '../redux/actions/documentActions';

const DocumentList = ({ documents }) => {
  documents = [];
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteDocument(id));
  };

  return (
    <ul>
      {documents.map(doc => (
        <li key={doc.id}>
          {doc.name}
          <button onClick={() => handleDelete(doc.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default DocumentList;