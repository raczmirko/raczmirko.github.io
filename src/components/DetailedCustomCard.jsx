import PlaceIcon from '@mui/icons-material/Place';
import WorkIcon from '@mui/icons-material/Work';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Box, Card, Chip, CardContent, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import {
    cardHeight,
    cardTitleSize,
    cardWidth,
    paragraphSize
} from '../assets/styles';
import colorUtil from '../utils/colorUtil';
import Colors from '../utils/colorUtil';

const DetailedCustomCard = ({ icon: Icon, title, location, date, position, body, tags = [], bgColor, textColor }) => {
    return (
        <Card sx={{ 
            position: 'relative', 
            alignContent: 'center',
            overflow: 'auto', 
            borderRadius: '15px', 
            width: cardWidth, 
            minHeight: cardHeight, 
            backgroundColor: bgColor ? bgColor : colorUtil.PINE, }}
        >
            <CardContent
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    color: textColor ? textColor : 'white',
                    textAlign: 'left',
                    padding: {
                        xs: '16px', // mobile
                        sm: '24px' // small screens and up
                    }
                }}
            >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems="center">
                    <Box>
                        <Typography
                            variant='overline'
                            component="div"
                            sx={{
                                fontSize: {
                                    xs: cardTitleSize.xs, // mobile
                                    sm: cardTitleSize.sm, // small screens
                                    md: cardTitleSize.md // medium and up
                                },
                                lineHeight: '1.2'
                            }}
                        >
                            {Icon && <Icon sx={{ mr : 1}} />}{title}
                        </Typography>
                        {/* DATE */}
                        {date && 
                            <Typography
                                variant="subtitle1"
                                component="div"
                                gutterBottom
                                sx={{
                                    fontSize: {
                                        xs: paragraphSize.xs, // mobile
                                        sm: paragraphSize.sm, // small screens
                                        md: paragraphSize.md // medium and up
                                    },
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: 1
                                }}
                            >
                                <DateRangeIcon sx={{ mr: 0.5 }} /> {date}
                            </Typography>
                        }
                        {/* LOCATION */}
                        {location && 
                            <Typography
                                variant="subtitle1"
                                component="div"
                                gutterBottom
                                sx={{
                                    fontSize: {
                                        xs: paragraphSize.xs, // mobile
                                        sm: paragraphSize.sm, // small screens
                                        md: paragraphSize.md // medium and up
                                    },
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: 1
                                }}
                            >
                                <PlaceIcon sx={{ mr: 0.5 }} /> {location}
                            </Typography>
                        }
                        {/* POSITION */}
                        { position &&
                            <Typography
                                variant="subtitle1"
                                component="div"
                                gutterBottom
                                sx={{
                                    fontSize: {
                                        xs: paragraphSize.xs, // mobile
                                        sm: paragraphSize.sm, // small screens
                                        md: paragraphSize.md // medium and up
                                    },
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: 1
                                }}
                            >
                                <WorkIcon sx={{ mr: 0.5 }} /> {position}
                            </Typography>
                        }
                        {/* TAGS */}
                        {tags &&
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                                {tags.map((tag, index) => {
                                    return (
                                    <Chip
                                        key={index}
                                        label={tag}
                                        size='string'
                                        variant="outlined"
                                        sx={{fontSize: paragraphSize, bgcolor: Colors.CYAN, color: 'black'}}
                                    />
                                    );
                                })}
                            </Box>
                        }
                        <Divider/>
                        <Typography
                            variant="body1"
                            component="div"
                            gutterBottom
                            sx={{
                                fontSize: {
                                    xs: paragraphSize.xs, // mobile
                                    sm: paragraphSize.sm, // small screens
                                    md: paragraphSize.md // medium and up
                                },
                                marginTop: 1
                            }}
                        >
                            {body}
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default DetailedCustomCard;
