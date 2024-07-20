import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project, onClick }) => {
    const { t: translate } = useTranslation();
    if(project == null) return;

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
        <Card sx={{ marginBottom: 2 }}>
            {renderCardImage(project)}
            <CardContent>
                <Typography variant="h5" component="div">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">{project.summary}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClick}>{translate('projects.details')}</Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
