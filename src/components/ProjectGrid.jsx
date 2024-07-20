import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Box, CardMedia, Grid, Pagination } from '@mui/material';
import React, { useState } from 'react';
import projects from '../assets/projects.json';
import { images } from '../utils/imageMap';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const ProjectGrid = () => {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    const projectsWithImages = projects.map((project) => {
        const projectImages = images[project.folder] || [];
        return { ...project, images: projectImages };
    });

    const totalPages = Math.ceil(projectsWithImages.length / itemsPerPage);

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    const displayProjects = projectsWithImages.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <Box sx={{ p: 2 }}>
            <Grid container spacing={2}>
                {displayProjects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ProjectCard project={project} onClick={() => handleOpenModal(project)}/>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handleChangePage}
                    shape="rounded"
                    showFirstButton
                    showLastButton
                />
            </Box>
            <ProjectModal 
                open={open}
                onClose={handleClose}
                project={selectedProject}
                projectImages={selectedProject ? selectedProject.images : []}
            />
        </Box>
    );
};

export default ProjectGrid;
