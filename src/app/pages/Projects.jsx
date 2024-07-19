import Container from "@mui/material/Container";

import { useTranslation } from 'react-i18next';
import ParticleBackground from "../../components/ParticleBackground";
import TitleCard from '../../components/TitleCard';
import Colors from '../../utils/colorUtil';
import ProjectGrid from "../../components/ProjectGrid";

const Projects = () => {
    const { t: translate } = useTranslation();
    return(
        <Container component="main" sx={{ marginTop:'20px' , padding:'10px', justifyContent: 'center' }}>
            <Container sx={{position: 'absolute', zIndex:-1}}>
                <ParticleBackground />
            </Container>
            <TitleCard title={translate('projects.title')} subtitle={translate('projects.subtitle')} bgColor={Colors.EMERALD} textColor={'black'}/>
            <ProjectGrid/>
        </Container>
    )
}

export default Projects;