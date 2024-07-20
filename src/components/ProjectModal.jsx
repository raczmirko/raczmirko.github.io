import { Backdrop, Box, Button, Fade, ImageList, ImageListItem, Modal, Typography, Divider, Chip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CloseButton from './CloseButton';
import CustomBlockWithTitle from './CustomBlockWithTitle';
import CustomChips from './CustomChips';
import Gallery from './Gallery';
import { modalWidth, modalHeight } from '../assets/styles';

const ProjectModal = ({ open, onClose, project, projectImages }) => {
    const { t: translate } = useTranslation();
    
    if (!project) return null;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: modalWidth,
        maxHeight: modalHeight,
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
                    <Typography variant="h4" sx={{ alignContent: 'center', mb: 2 }}>{project.title}</Typography>
                    <CustomBlockWithTitle title={translate('projects.summary')} body={project.summary}/>
                    <CustomBlockWithTitle title={translate('projects.motivation')} body={project.motivation}/>
                    <CustomBlockWithTitle title={translate('projects.functionality')} body={project.functionality}/>
                    <CustomBlockWithTitle title={translate('projects.futureImprovements')} body={project.futureImprovements}/>
                    <CustomBlockWithTitle title={translate('projects.techStack')} body={<CustomChips list={project.techStack}/>} />
                    <Box sx={{ display: 'flex' }}>
                        {project.links.length > 0 && project.links.map((link, index) => (
                            <Button key={index} sx={{ m:1 }} href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</Button>
                        ))}
                    </Box>
                    <Gallery images={project.images} title={project.title} />
                </Box>
            </Fade>
        </Modal>
    );
};

export default ProjectModal;
