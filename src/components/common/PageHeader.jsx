import { Typography } from '@mui/material';
import React from 'react';

const PageHeader = ({ text, bgColor, textColor, gradientFrom, gradientTo}) => {
    const headerStyle = {
        color: textColor,
        textTransform: 'uppercase',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        fontSize: '28px',
        borderRadius: '15px',
        backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
        backgroundColor: bgColor
    };

    return (
        <Typography className="page-header" style={headerStyle}>
            {text}
        </Typography>
    );
};

export default PageHeader;
