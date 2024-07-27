import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = (props) => {
    const [lang, setLang] = useState('en');
    const { t: translate } = useTranslation();
    const { i18n } = useTranslation();
    
    const handleChange = (event) => {
        setLang(event.target.value);
        i18n.changeLanguage(event.target.value);
    };

    return (
        <Box sx={props.sx}>
          <FormControl fullWidth>
            <InputLabel>{translate('general.lang')}</InputLabel>
            <Select
              value={lang}
              label={translate('general.lang')}
              onChange={handleChange}
            >
              <MenuItem value='en'>{translate('general.en')}</MenuItem>
              <MenuItem value='fr'>{translate('general.fr')}</MenuItem>
              <MenuItem value='hu'>{translate('general.hu')}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      );
}

export default LanguageSelector;