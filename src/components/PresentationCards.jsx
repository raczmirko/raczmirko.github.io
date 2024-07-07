import { Box, Container, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DisplayCard from "./DisplayCard";
import birdcam_1 from '../assets/img/birdcam/birdcam_1.jpg';
import presentation_maths_1 from '../assets/img/presentation_maths_1.jpg';
import presentation_maths_2 from '../assets/img/presentation_maths_2.jpg';
import presentation_maths_3 from '../assets/img/presentation_maths_3.jpg';
import presentation_databases from '../assets/img/presentation_databases.jpg';

const PresentationCards = () => {
    const { t: translate } = useTranslation();

    return(
        <Box sx={{  display: 'flex', flexDirection: 'column', gap: 2 }}>
            <DisplayCard 
                title={translate('academic.presentations.one.title')}
                summary={translate('academic.presentations.one.summary')}
                description={translate('academic.presentations.one.description')}
                date={translate('academic.presentations.one.date')}
                location={translate('academic.presentations.one.location')}
                image={birdcam_1}
            />
            <DisplayCard 
                title={translate('academic.presentations.two.title')}
                summary={translate('academic.presentations.two.summary')}
                description={translate('academic.presentations.two.description')}
                date={translate('academic.presentations.two.date')}
                location={translate('academic.presentations.two.location')}
                image={presentation_maths_1}
            />
            <DisplayCard 
                title={translate('academic.presentations.three.title')}
                summary={translate('academic.presentations.three.summary')}
                description={translate('academic.presentations.three.description')}
                date={translate('academic.presentations.three.date')}
                location={translate('academic.presentations.three.location')}
                image={presentation_maths_2}
            />
            <DisplayCard 
                title={translate('academic.presentations.four.title')}
                summary={translate('academic.presentations.four.summary')}
                description={translate('academic.presentations.four.description')}
                date={translate('academic.presentations.four.date')}
                location={translate('academic.presentations.four.location')}
                image={presentation_maths_3}
            />
            <DisplayCard 
                title={translate('academic.presentations.five.title')}
                summary={translate('academic.presentations.five.summary')}
                description={translate('academic.presentations.five.description')}
                date={translate('academic.presentations.five.date')}
                location={translate('academic.presentations.five.location')}
                image={presentation_databases}
            />
        </Box>
    )
}
export default PresentationCards;