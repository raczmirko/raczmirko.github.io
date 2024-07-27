import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Typography } from "@mui/material";
import { subTitleSize } from "../../assets/styles";
import LineDivider from "./LineDivider";

const BlockTitle = ({ title }) => {
  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <LineDivider />
      <ArrowForwardIosIcon sx={{ mr: 1 }} />
      <Typography variant="overline" fontSize={subTitleSize}>
        {title}
      </Typography>
      <LineDivider />
    </Box>
  );
};

export default BlockTitle;
