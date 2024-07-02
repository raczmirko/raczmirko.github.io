import { Card, CardContent, Typography, Box } from '@mui/material';
import colorUtil from '../utils/colorUtil';
import { outlinedTextStyle, titleSize, subTitleSize, 
    paragraphSize, cardHeight, cardWidth, cardIconSize } from '../assets/styles';

const CustomCard = ({ icon: Icon, title, body, bgColor, textColor }) => {
    return (
        <Card sx={{ position: 'relative', overflow: 'hidden', borderRadius: '15px', width: cardWidth }}>
            <CardContent
                sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    color: textColor ? textColor : 'white',
                    backgroundColor: bgColor ? bgColor : colorUtil.PINE,
                    textAlign: 'left',
                    padding: {
                        xs: '16px', // mobile
                        sm: '24px' // small screens and up
                    }
                }}
            >
                {Icon && (
                    <Box sx={{ marginRight: 2 }}>
                        <Icon sx={{ fontSize: cardIconSize }} />
                    </Box>
                )}
                <Box>
                    <Typography
                        component="div"
                        sx={{
                            fontSize: {
                                xs: subTitleSize.xs, // mobile
                                sm: subTitleSize.sm, // small screens
                                md: subTitleSize.md // medium and up
                            },
                            ...outlinedTextStyle,
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
                            fontSize: {
                                xs: paragraphSize.xs, // mobile
                                sm: paragraphSize.sm, // small screens
                                md: paragraphSize.md // medium and up
                            },
                            ...outlinedTextStyle,
                            marginTop: 1
                        }}
                    >
                        {body}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default CustomCard;
