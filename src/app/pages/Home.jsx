import ResourceIcon from '@mui/icons-material/Article';
import CodeIcon from '@mui/icons-material/Code';
import ProjectIcon from '@mui/icons-material/DataObject';
import SkillsIcon from '@mui/icons-material/DeveloperBoard';
import AcademicIcon from '@mui/icons-material/School';
import { Box, Grid } from '@mui/material';
import Container from "@mui/material/Container";
import { useTranslation } from 'react-i18next';
import BlockTitle from '../../components/common/BlockTitle';
import CustomCard from "../../components/cards/CustomCard";
import ParticleBackground from "../../components/common/ParticleBackground";
import WelcomeCard from "../../components/pages/home/WelcomeCard";

const Home = () => {
    const { t: translate } = useTranslation();
    return(
        <Container component="main" sx={{ marginTop:'20px' , padding:'10px', justifyContent: 'center' }}>
            <Container sx={{position: 'absolute', zIndex:-1}}>
                <ParticleBackground />
            </Container>
            <WelcomeCard/>
            <BlockTitle title={translate('home.about')}/>
            <Box sx={{ mt: 2 }} />
            <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <CustomCard
                        icon={CodeIcon}
                        title={translate('home.aboutTitle')}
                        body={translate('home.aboutDesc')}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomCard
                        icon={ProjectIcon}
                        title={translate('home.cards.projects.title')}
                        body={translate('home.cards.projects.description')}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomCard
                        icon={ResourceIcon}
                        title={translate('home.cards.resources.title')}
                        body={translate('home.cards.resources.description')}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomCard
                        icon={SkillsIcon}
                        title={translate('home.cards.skills.title')}
                        body={translate('home.cards.skills.description')}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomCard
                        icon={AcademicIcon}
                        title={translate('home.cards.academic.title')}
                        body={translate('home.cards.academic.description')}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;