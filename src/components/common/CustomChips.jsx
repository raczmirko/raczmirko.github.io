import { Box, Chip } from "@mui/material";
import React from "react";
import { paragraphSize } from "../../assets/styles";

const CustomChips = ({ list }) => {
  return (
    <Box sx={{ flexWrap: "wrap", display: "flex", gap: 1 }}>
      {list.map((elt, index) => {
        return (
          <Chip
            key={index}
            label={elt}
            variant="outlined"
            sx={{ fontSize: paragraphSize }}
          />
        );
      })}
    </Box>
  );
};

export default CustomChips;
