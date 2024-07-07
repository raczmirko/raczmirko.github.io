import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ExpandMoreButton } from '../assets/cardStyles';
import { cardWidth } from '../assets/styles';
import Colors from '../utils/colorUtil';

const DisplayCard = ({ title, summary, description, location, date, image, imageAltTxt, link, linkName }) => {
    const [expanded, setExpanded] = React.useState(false);
    const { t: translate } = useTranslation();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Card sx={{ maxWidth: cardWidth }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: Colors.AMBER }}>
                        MR
                    </Avatar>
                }
                title={title}
                titleTypographyProps={{ variant: 'h5' }}
                subheader={date.concat(' ').concat(location ? ' - '.concat(location) : '')}
                subheaderTypographyProps={{ variant: 'h6' }}
            />
            <CardContent>
                <Typography paragraph>
                    {summary}
                </Typography>
                {link &&
                    <Button
                        href={link}
                        target="_blank" // Open link in a new tab
                    >
                        {linkName ? linkName : translate('general.link')}
                    </Button>
                }
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
                {image && 
                    <CardMedia
                        component="img"
                        image={image}
                        alt={imageAltTxt ? imageAltTxt : null}
                    />
                }
                <CardContent>
                    <Typography paragraph>{description}</Typography>
                </CardContent>
            </Collapse>
            </Card>
    )
}
export default DisplayCard;