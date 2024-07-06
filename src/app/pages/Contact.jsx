import { EmailOutlined } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Container from "@mui/material/Container";
import { useTranslation } from 'react-i18next';
import BlockTitle from '../../components/BlockTitle';
import CustomCard from "../../components/CustomCard";
import ParticleBackground from "../../components/ParticleBackground";
import PublicKeyCard from '../../components/PublicKeyCard';
import PublicKeyText from '../../components/PublicKeyText';
import TitleCard from '../../components/TitleCard';
import Colors from '../../utils/colorUtil';

const Contact = () => {
    const { t: translate } = useTranslation();
    return(
        <Container component="main" sx={{ marginTop:'20px' , padding:'10px', justifyContent: 'center' }}>
            <Container sx={{position: 'absolute', zIndex:-1}}>
                <ParticleBackground />
            </Container>
            <TitleCard title={translate('contact.title')} subtitle={translate('contact.subtitle')}/>
            <BlockTitle title={translate('contact.getInTouch')}/>
            <Box sx={{ marginTop: 2 }} />
            <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
                <Grid item xs={12} sm={8}>
                    <CustomCard
                        icon={EmailOutlined}
                        title={translate('contact.email.title')}
                        body={translate('contact.email.description')}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <PublicKeyCard/>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Accordion sx={{ bgcolor: Colors.PURPLE }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                        {translate('contact.pgp.asText')}
                        </AccordionSummary>
                        <AccordionDetails sx={{ textAlign: 'center', overflow: 'auto' }}>
                            <PublicKeyText/>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact;