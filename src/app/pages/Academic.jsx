import { Box, Grid } from '@mui/material';
import Container from "@mui/material/Container";
import { useTranslation } from 'react-i18next';
import BlockTitle from '../../components/BlockTitle';
import CustomAccordion from '../../components/CustomAccordion';
import JustifiedTextCard from '../../components/JustifiedTextCard';
import ParticleBackground from "../../components/ParticleBackground";
import TitleCard from '../../components/TitleCard';
import Colors from '../../utils/colorUtil';
import PresentationCards from '../../components/PresentationCards';
import PublicationCards from '../../components/PublicationCards';
import AchievementCards from '../../components/AchievementCards';

const Academic = () => {
    const { t: translate } = useTranslation();
    return(
        <Container component="main" sx={{ marginTop:'20px' , padding:'10px', justifyContent: 'center' }}>
            <Container sx={{position: 'absolute', zIndex:-1}}>
                <ParticleBackground />
            </Container>
            <TitleCard  title={translate('academic.title')} 
                        bgColor={Colors.AMBER}
                        textColor={'black'}/>
            <BlockTitle title={translate('general.summary')}/>
            <Box sx={{ marginTop: 2 }} />
            <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
                <Grid item xs={12} sm={12}>
                    <JustifiedTextCard text={translate('academic.summary')}/>
                </Grid>
            </Grid>
            <Box sx={{ marginTop: 2 }} />
            <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
                <Grid item xs={12} sm={12}>
                    <CustomAccordion 
                        title={translate('academic.presentations.title')} 
                        body={PresentationCards}
                        bgColor={Colors.CRIMSON}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <CustomAccordion 
                        title={translate('academic.publications.title')} 
                        body={PublicationCards}
                        bgColor={Colors.WHITE}
                        textColor={'black'}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <CustomAccordion 
                        title={translate('academic.achievements.title')} 
                        body={AchievementCards}
                        bgColor={Colors.GREEN}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Academic;