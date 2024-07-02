import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import bannerImage from '../assets/banner.jpg';
import { heroCardHeight, outlinedTextStyle, subTitleSize, titleSize } from '../assets/styles';

const WelcomeCard = () => {
  const { t: translate } = useTranslation();
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
            xs: heroCardHeight.xs, // mobile
            sm: heroCardHeight.sm, // small screens
            md: heroCardHeight.md // medium and up
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
          {translate('home.title')}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            fontSize: {
              xs: subTitleSize.xs, // mobile
              sm: subTitleSize.sm, // small screens
              md: subTitleSize.md // medium and up
            },
            ...outlinedTextStyle
          }}
        >
          {translate('home.welcome')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
