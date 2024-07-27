import React from 'react';
import { Box, Chip } from '@mui/material';
import * as Icons from '@mui/icons-material';
import skillsData from '../../../assets/skills.json';
import { paragraphSize } from '../../../assets/styles';

const SkillChips = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {skillsData.hardSkills.map((skill, index) => {
        const IconComponent = Icons[skill.icon];
        return (
          <Chip
            key={index}
            icon={IconComponent ? <IconComponent fontSize="medium"/> : null}
            label={skill.name}
            size='string'
            variant="outlined"
            sx={{fontSize: paragraphSize}}
          />
        );
      })}
    </Box>
  );
}

export default SkillChips;
