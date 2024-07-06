import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DisplayCard from "./DisplayCard";

const PresentationCards = () => {
    const { t: translate } = useTranslation();

    return(
        <Box>
            <DisplayCard 
                title={translate('academic.presentations.one.title')}
                summary={translate('academic.presentations.one.summary')}
                description={translate('academic.presentations.one.description')}
                date={translate('academic.presentations.one.date')}
            />
        </Box>
    )
}
export default PresentationCards;