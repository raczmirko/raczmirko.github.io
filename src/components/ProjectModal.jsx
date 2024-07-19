import { Box, Button, ImageList, ImageListItem, Modal, Typography, Backdrop, Fade } from '@mui/material';
import React from 'react';
import CloseButton from './CloseButton';

const ProjectModal = ({ open, onClose, project, projectImages }) => {
    if (!project) return null;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxHeight: '80%',
        bgcolor: 'background.paper',
        border: '2px solid #ffffff',
        boxShadow: 24,
        p: 4,
        overflow: 'auto'
    };

    return (
        <Modal 
            open={open} 
            onClose={onClose} 
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <CloseButton onClose={onClose}/>
                    <Typography variant="h4" sx={{ alignContent: 'center' }}>{project.title}</Typography>
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
                    <Box sx={{ display: 'flex' }}>
                        {project.links.length > 0 && project.links.map((link, index) => (
                            <Button key={index} sx={{ m:1 }} href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</Button>
                        ))}
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};

export default ProjectModal;
