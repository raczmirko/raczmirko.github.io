import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const JustifiedTextCard = ({ text }) => {
    return (
        <Card sx={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '16px',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'justify',
                        textAlignLast: 'left', // To align the last line to the left
                    }}
                >
                    <Typography
                        sx={{
                            width: '100%',
                            fontSize: '1.2rem',
                            whiteSpace: 'pre-wrap', // To handle new lines correctly
                            wordBreak: 'break-word', // To break long words
                        }}
                    >
                        {text}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default JustifiedTextCard;
