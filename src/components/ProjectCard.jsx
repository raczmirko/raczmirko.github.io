import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const ProjectCard = ({ title, summary, onClick }) => {
    return (
        <Card sx={{ marginBottom: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">{title}</Typography>
                <Typography variant="body2" color="text.secondary">{summary}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClick}>Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
