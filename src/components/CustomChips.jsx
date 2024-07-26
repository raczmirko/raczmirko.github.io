import { Box, Chip } from '@mui/material';
import React from 'react';

const CustomChips = ({ list }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {list.map((elt, index) => {
            return (
              <Chip
                key={index}
                label={elt}
                variant="outlined"
              />
            );
          })}
        </Box>
    );
}

export default CustomChips;