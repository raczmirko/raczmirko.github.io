import { EmailOutlined } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import Container from "@mui/material/Container";
import { useTranslation } from 'react-i18next';
import BlockTitle from '../../components/BlockTitle';
import CustomAccordion from '../../components/CustomAccordion';
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
                    <CustomAccordion title={translate('contact.pgp.asText')} body={PublicKeyText} bgColor={Colors.PURPLE}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact;