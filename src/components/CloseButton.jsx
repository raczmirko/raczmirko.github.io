import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CloseButton = ({ onClose }) => {
    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
    };
    
    return (
        <IconButton sx={closeButtonStyle} onClick={onClose}>
            <CloseIcon />
        </IconButton>
    )
}

export default CloseButton;