import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import { useTranslation } from 'react-i18next';
import ParticleBackground from "../../components/common/ParticleBackground";
import ResourceComponent from "../../components/pages/resources/ResourceComponent";
import TitleCard from '../../components/common/TitleCard';
import Colors from '../../utils/colorUtil';

const Resources = () => {
    const { t: translate } = useTranslation();

    return(
        <Container component="main" sx={{ marginTop:'20px' , padding:'10px', justifyContent: 'center' }}>
            <Container sx={{position: 'absolute', zIndex:-1}}>
                <ParticleBackground />
            </Container>
            <TitleCard  
                title={translate('resources.title')} 
                subtitle={translate('resources.subtitle')}
                bgColor={Colors.AMBER}
                textColor={'black'}
            />
            <Box sx={{ mb:1 }}/>
            <ResourceComponent/>
        </Container>
    )
}

export default Resources;