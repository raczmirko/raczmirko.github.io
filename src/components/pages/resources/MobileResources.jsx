import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import React from "react";
import resources from "../../../assets/resources.json";

const MobileResourceList = () => {
  const [expandedRow, setExpandedRow] = React.useState(null);

  return (
    <Box sx={{ mt: 2 }}>
      {resources.map((row, index) => (
        <Box key={index} sx={{ mb: 1 }}>
          <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: "4px" }}>
            <Box display="flex" justifyContent="space-between">
              <Typography>
                <strong>{row.Category}</strong> - {row.Name} ({row.Language})
              </Typography>
              <IconButton
                size="small"
                onClick={() =>
                  setExpandedRow(expandedRow === index ? null : index)
                }
              >
                {expandedRow === index ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </IconButton>
            </Box>
            {expandedRow === index && (
              <Box sx={{ mt: 2, overflow: "auto" }}>
                <Link href={row.Link} target="_blank" rel="noopener noreferrer">
                  {row.Link}
                </Link>
                <Typography sx={{ mt: 1 }}>{row.Description}</Typography>
              </Box>
            )}
          </Box>
        </Box>
        // <CustomAccordion
        //     key={index}
        //     title={`${row.Name} (${row.Language})`}
        //     body={() => <CustomCard title={row.Category} body={row.Description} />}
        // />
      ))}
    </Box>
  );
};

export default MobileResourceList;
