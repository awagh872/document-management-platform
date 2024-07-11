import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDocumentVersions, uploadDocumentVersion } from '../redux/actions/versionActions';
import { List, ListItem, ListItemText, Button, Container, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const DocumentVersionControl = () => {
  const dispatch = useDispatch();
  const { documentId } = useParams();
  const versions = useSelector(state => state.versions.versions);

  useEffect(() => {
    dispatch(getDocumentVersions(documentId));
  }, [dispatch, documentId]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    dispatch(uploadDocumentVersion(documentId, file));
  };

  return (
    <Container>
      <Typography variant="h6">Version Control</Typography>
      <input
        accept="application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        style={{ display: 'none' }}
        id="version-upload"
        type="file"
        onChange={handleUpload}
      />
      <label htmlFor="version-upload">
        <Button variant="contained" color="primary" component="span">
          Upload New Version
        </Button>
      </label>
      <List>
        {versions.map(version => (
          <ListItem key={version.id}>
            <ListItemText primary={`Version ${version.versionNumber}`} secondary={version.timestamp} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default DocumentVersionControl;