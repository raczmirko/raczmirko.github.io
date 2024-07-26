import { Box, Chip } from '@mui/material';
import React from 'react';

const CustomChips = ({ list }) => {
    return (
        <Box sx={{ flexWrap: 'wrap', display: 'flex', gap: 1 }}>
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