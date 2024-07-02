import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import bannerImage from '../assets/banner.jpg';
import { outlinedTextStyle, titleSize, paragraphSize, cardHeight } from '../assets/styles';

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
            xs: cardHeight.xs, // mobile
            sm: cardHeight.sm, // small screens
            md: cardHeight.md // medium and up
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
              xs: titleSize.xs, // mobile
              sm: titleSize.sm, // small screens
              md: titleSize.md // medium and up
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
              xs: paragraphSize.xs, // mobile
              sm: paragraphSize.sm, // small screens
              md: paragraphSize.md // medium and up
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
