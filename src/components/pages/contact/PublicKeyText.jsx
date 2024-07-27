import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const PublicKeyText = () => {
  const [publicKey, setPublicKey] = useState('');

  useEffect(() => {
    fetch('/assets/okrim_public_key.asc')
      .then(response => response.text())
      .then(text  => setPublicKey(text))  
      .catch(error => console.error('Error fetching the public key:', error));
  });

  return (
    <Typography fontSize={16}>
        {publicKey}
    </Typography>
  );
};

export default PublicKeyText;
