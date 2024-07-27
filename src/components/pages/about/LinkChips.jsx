import React from "react";
import { Box, Chip, Link } from "@mui/material";
import * as Icons from "@mui/icons-material";
import socials from "../../../assets/socials.json";
import { paragraphSize } from "../../../assets/styles";

const LinkChips = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
      {socials.list.map((social, index) => {
        const IconComponent = Icons[social.icon];
        return (
          <Chip
            key={index}
            icon={IconComponent ? <IconComponent fontSize="medium" /> : null}
            label={
              <Link
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                {social.name}
              </Link>
            }
            size="string"
            variant="outlined"
            sx={{ fontSize: paragraphSize }}
          />
        );
      })}
    </Box>
  );
};

export default LinkChips;
