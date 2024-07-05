import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import publicKeyTxt from '../assets/okrim_public_key.asc';

const PublicKeyText = () => {
  const [publicKey, setPublicKey] = useState(publicKeyTxt);

  useEffect(() => {
    fetch(publicKey)
      .then(response => response.text())
      .then(data => setPublicKey(data))
      .catch(error => console.error('Error fetching the public key:', error));
  }, []);

  return (
    <Typography fontSize={16}>
        {publicKey}
    </Typography>
  );
};

export default PublicKeyText;
