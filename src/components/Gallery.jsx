import CloseIcon from '@mui/icons-material/Close';
import { Backdrop, Box, IconButton, ImageList, ImageListItem, Modal, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';

const Gallery = ({ images, title }) => {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const handleOpen = (image) => {
        setCurrentImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentImage(null);
    };

    const getCols = () => {
        if (isXs) return 1;
        if (isSm) return 2;
        if (isMd) return 3;
        return 2; // Default
    };

    return (
        <>
            <ImageList cols={getCols()} gap={10}>
                {images.map((img, index) => (
                    <ImageListItem key={index} onClick={() => handleOpen(img)}>
                        <img src={img} alt={title} style={{ margin: 10, cursor: 'pointer', objectFit: 'cover', width: '90%', height: '100%', outline: '2px solid white' }} />
                    </ImageListItem>
                ))}
            </ImageList>

            <Modal
                open={open}
                onClose={handleClose}
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    border: '2px solid #ffffff',
                    boxShadow: 24,
                    width: '80%',
                    maxHeight: '80%',
                    overflow: 'auto',
                }}>
                    <IconButton 
                        aria-label="close" 
                        onClick={handleClose} 
                        sx={{ 
                            position: 'absolute', 
                            top: 8, 
                            right: 8 
                        }}>
                        <CloseIcon />
                    </IconButton>
                    {currentImage && (
                        <img src={currentImage} alt={title} style={{ width: '100%', height: 'auto' }} />
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default Gallery;
