import React from 'react';
import { Modal, Box, Typography, Button, ImageList, ImageListItem } from '@mui/material';

const ProjectModal = ({ open, onClose, project, projectImages }) => {
    if (!project) return null;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '80%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <Typography variant="h5" component="h2">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">{project.summary}</Typography>
                <Typography variant="h6" component="h3">Motivation</Typography>
                <Typography variant="body2" color="text.secondary">{project.motivation}</Typography>
                <Typography variant="h6" component="h3">Functionality</Typography>
                <Typography variant="body2" color="text.secondary">{project.functionality}</Typography>
                <Typography variant="h6" component="h3">Challenges</Typography>
                <Typography variant="body2" color="text.secondary">{project.challenges.join(", ")}</Typography>
                <Typography variant="h6" component="h3">Future Improvements</Typography>
                <Typography variant="body2" color="text.secondary">{project.futureImprovements.join(", ")}</Typography>
                <Typography variant="h6" component="h3">Tech Stack</Typography>
                <Typography variant="body2" color="text.secondary">{project.techStack.join(", ")}</Typography>
                <ImageList cols={3} rowHeight={164}>
                    {projectImages.length > 0 && projectImages.map((img, index) => (
                        <ImageListItem key={index}>
                            <img src={img} alt={project.title} />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Button href={project.links[0].link} target="_blank" rel="noopener noreferrer">GitHub</Button>
            </Box>
        </Modal>
    );
};

export default ProjectModal;
