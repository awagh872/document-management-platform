import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDocuments, searchDocuments } from '../redux/actions/documentActions';
import DocumentList from './DocumentList';
import UploadDocument from './UploadDocument';
import { TextField, Container } from '@material-ui/core';

const Dashboard = () => {
  const dispatch = useDispatch();
  const documents = useSelector(state => state.documents.documents);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getDocuments());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchDocuments(e.target.value));
  };

  return (
    <Container>
      <h1>Dashboard</h1>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="search"
        label="Search Documents"
        name="search"
        autoComplete="search"
        autoFocus
        value={searchTerm}
        onChange={handleSearch}
      />
      <UploadDocument />
      <DocumentList documents={documents} />
    </Container>
  );
};

export default Dashboard;
