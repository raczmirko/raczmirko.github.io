import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Box, Button, Card, CardContent, CardMedia, Grid, Pagination, Typography } from '@mui/material';
import React, { useState } from 'react';
import projects from '../assets/projects.json';
import { images } from '../utils/imageMap';
import ProjectModal from './ProjectModal';

const ProjectGrid = () => {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const handleOpenModal = (project, images) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

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
                        <Card>
                            {renderCardImage(project)}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.summary}
                                </Typography>
                                <Button size="small" onClick={() => handleOpenModal(project)}>Learn More</Button>
                            </CardContent>
                        </Card>
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
