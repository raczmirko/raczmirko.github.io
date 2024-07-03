import { Card, CardContent, Typography, Box } from '@mui/material';
import colorUtil from '../utils/colorUtil';
import { outlinedTextStyle, titleSize, subTitleSize, 
    paragraphSize, cardHeight, cardWidth, cardIconSize, cardTitleSize } from '../assets/styles';

const CustomCard = ({ icon: Icon, title, body, bgColor, textColor }) => {
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
                    alignItems: 'center',
                    color: textColor ? textColor : 'white',
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
                                xs: cardTitleSize.xs, // mobile
                                sm: cardTitleSize.sm, // small screens
                                md: cardTitleSize.md // medium and up
                            },
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
