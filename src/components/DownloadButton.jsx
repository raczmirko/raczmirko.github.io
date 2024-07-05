import React from 'react';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const DownloadButton = ({ fileName, label }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/assets/${fileName}`;
    link.download = fileName;
    link.click();
  };

  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={handleDownload}
      startIcon={<DownloadIcon />}
      sx={{ marginTop: 2 }}
    >
      {label}
    </Button>
  );
};

export default DownloadButton;
