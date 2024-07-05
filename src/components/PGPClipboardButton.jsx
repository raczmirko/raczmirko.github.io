import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import publicKeyTxt from '../assets/okrim_public_key.asc';

const TextClipboardButton = ({ label }) => {
  const [publicKey, setPublicKey] = useState(publicKeyTxt);

  useEffect(() => {
    fetch(publicKey)
      .then(response => response.text())
      .then(data => setPublicKey(data))
      .catch(error => console.error('Error fetching the public key:', error));
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(publicKey)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch(error => {
        console.error('Error copying text:', error);
      });
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleCopy}
      startIcon={<ContentCopyIcon />}
      sx={{ marginTop: 2 }}
    >
      {label}
    </Button>
  );
};

export default TextClipboardButton;
