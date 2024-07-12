import ResourceIcon from '@mui/icons-material/Article';
import CodeIcon from '@mui/icons-material/Code';
import ProjectIcon from '@mui/icons-material/DataObject';
import SkillsIcon from '@mui/icons-material/DeveloperBoard';
import AcademicIcon from '@mui/icons-material/School';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomCard from './CustomCard';

const SoftSkillCards = () => {
    const { t: translate } = useTranslation();
    return(
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
    )
}

export default SoftSkillCards;