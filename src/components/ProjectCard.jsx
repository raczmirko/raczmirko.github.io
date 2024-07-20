import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Colors from '../utils/colorUtil';

const ProjectCard = ({ project, onClick }) => {
    const { t: translate } = useTranslation();
    if(project == null) return;

    function truncateText(text) {
        if (text.length > 150) {
            return text.substring(0, 150) + '...';
        } else {
            return text;
        }
    }

    const renderCardImage = (project) => {
        return (
            project.images.length > 0 ? (
                <CardMedia
                    component="img"
                    height="140"
                    image={project.images[0]}
                    alt={project.title}
                />
                ) : (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 140,
                    }}
                >
                    <ImageNotSupportedIcon fontSize="large" />
                </Box>
            )
        )
    };

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2, height: '350px', bgcolor: '#272727' }}>
            {renderCardImage(project)}
            <CardContent sx={{ flex: 1 }}>
                <Typography variant="h5" component="div">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">{truncateText(project.summary)}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClick}>{translate('projects.details')}</Button>
            </CardActions>
        </Card>

    );
};

export default ProjectCard;
