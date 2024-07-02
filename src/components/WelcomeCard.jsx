import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import bannerImage from '../assets/banner.jpg';
import { outlinedTextStyle } from '../assets/styles';

const WelcomeCard = () => {
  return (
    <Card sx={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}>
      <CardMedia
        component="img"
        alt="Image of an ancient monument in nature"
        image={bannerImage}
        title="Welcome Image"
        sx={{
          opacity: 0.7,
          height: {
            xs: 200, // mobile
            sm: 400, // small screens
            md: 500 // medium and up
          }
        }}
      />
      <CardContent
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: {
            xs: '16px', // mobile
            sm: '24px' // small screens and up
          }
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: {
              xs: '40px', // mobile
              sm: '60px', // small screens
              md: '140px' // medium and up
            },
            ...outlinedTextStyle,
            lineHeight: '1.2'
          }}
        >
          WELCOME
        </Typography>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            fontSize: {
              xs: '16px', // mobile
              sm: '20px', // small screens
              md: '24px' // medium and up
            },
            ...outlinedTextStyle
          }}
        >
          to OKRIM | MIRKO RACZ's computer science portfolio & website!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
