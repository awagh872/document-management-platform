import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadDocument } from '../redux/actions/documentActions';
import { useDropzone } from 'react-dropzone';

const UploadDocument = () => {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const handleUpload = () => {
    files.forEach(file => {
      const formData = new FormData();
      formData.append('file', file);
      dispatch(uploadDocument(formData));
    });
    setFiles([]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadDocument;