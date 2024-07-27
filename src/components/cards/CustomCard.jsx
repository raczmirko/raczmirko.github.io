import { Box, Card, CardContent, Typography } from "@mui/material";
import {
  cardHeight,
  cardIconSize,
  cardTitleSize,
  cardWidth,
  paragraphSize,
} from "../../assets/styles";
import colorUtil from "../../utils/colorUtil";

const CustomCard = ({ icon: Icon, title, body, bgColor, textColor }) => {
  return (
    <Card
      sx={{
        position: "relative",
        alignContent: "center",
        overflow: "auto",
        borderRadius: "15px",
        width: cardWidth,
        minHeight: cardHeight,
        backgroundColor: bgColor ? bgColor : colorUtil.PINE,
      }}
    >
      <CardContent
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          color: textColor ? textColor : "white",
          textAlign: "left",
          padding: {
            xs: "16px", // mobile
            sm: "24px", // small screens and up
          },
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography
              component="div"
              sx={{
                fontSize: {
                  xs: cardTitleSize.xs, // mobile
                  sm: cardTitleSize.sm, // small screens
                  md: cardTitleSize.md, // medium and up
                },
                lineHeight: "1.2",
              }}
            >
              {title}
            </Typography>
            {Icon && (
              <Icon sx={{ fontSize: cardIconSize }} />
            )}
          </Box>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{
              fontSize: {
                xs: paragraphSize.xs, // mobile
                sm: paragraphSize.sm, // small screens
                md: paragraphSize.md, // medium and up
              },
              marginTop: 1,
            }}
          >
            {body}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
