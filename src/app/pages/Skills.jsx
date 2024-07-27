import { Box } from '@mui/material';
import Container from "@mui/material/Container";
import { useTranslation } from 'react-i18next';
import BlockTitle from '../../components/common/BlockTitle';
import ParticleBackground from "../../components/common/ParticleBackground";
import TitleCard from '../../components/common/TitleCard';
import Colors from '../../utils/colorUtil';
import SoftSkillCards from '../../components/pages/skills/SoftSkillCards';
import SkillChips from '../../components/pages/skills/SkillChips';

const Skills = () => {
    const { t: translate } = useTranslation();
    return(
        <Container component="main" sx={{ marginTop:'20px' , padding:'10px', justifyContent: 'center' }}>
            <Container sx={{position: 'absolute', zIndex:-1}}>
                <ParticleBackground />
            </Container>
            <TitleCard title={translate('skills.title')} bgColor={Colors.CORAL}/>
            <BlockTitle title={translate('skills.hard')}/>
            <Box sx={{ mt: 2 }} />
            <SkillChips />
            <BlockTitle title={translate('skills.soft')}/>
            <Box sx={{ mt: 2 }} />
            <SoftSkillCards/>
        </Container>
    )
}

export default Skills;