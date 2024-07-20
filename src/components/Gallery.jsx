// Gallery.jsx
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, ImageList, ImageListItem, Modal } from '@mui/material';
import React, { useState } from 'react';

const Gallery = ({ images, title }) => {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleOpen = (image) => {
        setCurrentImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentImage(null);
    };

    return (
        <>
            <ImageList cols={2} rowHeight={164}>
                {images.map((img, index) => (
                    <ImageListItem key={index} onClick={() => handleOpen(img)}>
                        <img src={img} alt={title} style={{ cursor: 'pointer', objectFit: 'cover', width: '100%', height: '100%' }} />
                    </ImageListItem>
                ))}
            </ImageList>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
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
