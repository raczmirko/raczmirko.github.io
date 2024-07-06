import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const CustomAccordion = ({ title, body: Body, bgColor }) => {
    return (
        <Accordion sx={{ bgcolor: bgColor }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
            {title}
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: 'center', overflow: 'auto' }}>
                <Body/>
            </AccordionDetails>
        </Accordion>
    )
}

export default CustomAccordion;