import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { paragraphSize, titleCardTitleSize } from '../assets/styles';
import Colors from '../utils/colorUtil';

const TitleCard = ({ title, subtitle, bgColor, textColor }) => {
  return (
    <Card sx={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}>
      <CardContent
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: textColor ? textColor : 'white',
          textAlign: 'center',
          backgroundColor: bgColor ? bgColor : Colors.PURPLE,
          padding: {
            xs: '16px', // mobile
            sm: '24px' // small screens and up
          }
        }}
      >
        <Typography
          component="div"
          variant='overline'
          sx={{
            fontSize: titleCardTitleSize,
            lineHeight: '1.2'
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            fontSize: paragraphSize,
            opacity: 0.5
          }}
        >
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TitleCard;
