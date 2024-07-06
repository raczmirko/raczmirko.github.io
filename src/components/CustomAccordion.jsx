import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { paragraphSize } from '../assets/styles';

const CustomAccordion = ({ title, body: Body, bgColor, textColor }) => {
    const getIconWithContrast = () => {
        switch(textColor){
            case 'white':
                return <ExpandMoreIcon />;
            case 'black':
                return <ExpandMoreIcon color='black'/>;
            default:
                return <ExpandMoreIcon />;
        }
    }

    return (
        <Accordion sx={{ bgcolor: bgColor }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color: textColor ? textColor : 'white'}}/>}
            >
                <Typography variant='overline' fontSize={paragraphSize} color={textColor ? textColor : 'white'}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: 'center', overflow: 'auto' }}>
                <Body/>
            </AccordionDetails>
        </Accordion>
    )
}

export default CustomAccordion;