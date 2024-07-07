import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { cardWidth } from '../assets/styles';
import Colors from '../utils/colorUtil';
import { ExpandMoreButton } from '../assets/cardStyles';

const DisplayCard = ({ title, summary, description, location, date, imagePath, imageAltTxt }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Card sx={{ maxWidth: cardWidth }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: Colors.AMBER }}>
                        R
                    </Avatar>
                }
                title={title}
                titleTypographyProps={{ variant: 'h5' }}
                subheader={date.concat(' ').concat(location ? ', '.concat(location) : '')}
                subheaderTypographyProps={{ variant: 'h6' }}
            />
            {imagePath && 
                <CardMedia
                    component="img"
                    height="194"
                    image={imagePath}
                    alt={imageAltTxt ? imageAltTxt : null}
                />
            }
            <CardContent>
                <Typography paragraph>
                    {summary}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMoreButton
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMoreButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{description}</Typography>
                </CardContent>
            </Collapse>
            </Card>
    )
}
export default DisplayCard;