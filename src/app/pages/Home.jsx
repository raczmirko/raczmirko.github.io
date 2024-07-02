import ResourceIcon from '@mui/icons-material/Article';
import ProjectIcon from '@mui/icons-material/DataObject';
import SkillsIcon from '@mui/icons-material/DeveloperBoard';
import AcademicIcon from '@mui/icons-material/School';
import { Box, Grid } from '@mui/material';
import Container from "@mui/material/Container";
import { useTranslation } from 'react-i18next';
import CustomCard from "../../components/CustomCard";
import ParticleBackground from "../../components/ParticleBackground";
import WelcomeCard from "../../components/WelcomeCard";

const Home = () => {
    const { t: translate } = useTranslation();
    return(
        <Container component="main" sx={{ marginTop:'20px' , padding:'10px', justifyContent: 'center' }}>
            <Container sx={{position: 'absolute', zIndex:-1}}>
                <ParticleBackground />
            </Container>
            <WelcomeCard/>
            <Box sx={{ marginTop: 2 }} />
            <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <CustomCard
                        icon={ProjectIcon}
                        title={translate('home.cards.projectsTitle')}
                        body={translate('home.cards.projectsDesc')}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomCard
                        icon={ResourceIcon}
                        title={translate('home.cards.resourcesTitle')}
                        body={translate('home.cards.resourcesDesc')}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomCard
                        icon={SkillsIcon}
                        title={translate('home.cards.skillsTitle')}
                        body={translate('home.cards.skillsDesc')}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomCard
                        icon={AcademicIcon}
                        title={translate('home.cards.academicTitle')}
                        body={translate('home.cards.academicDesc')}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;