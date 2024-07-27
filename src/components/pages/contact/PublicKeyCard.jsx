import { LockOutlined } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  cardHeight,
  cardIconSize,
  cardTitleSize,
  cardWidth,
  paragraphSize,
} from "../../../assets/styles";
import colorUtil from "../../../utils/colorUtil";
import DownloadButton from "../../pages/contact/DownloadButton";
import TextClipboardButton from "../contact/PGPClipboardButton";

const PublicKeyCard = () => {
  const { t: translate } = useTranslation();
  return (
    <Card
      sx={{
        position: "relative",
        alignContent: "center",
        overflow: "auto",
        borderRadius: "15px",
        width: cardWidth,
        minHeight: cardHeight,
        backgroundColor: colorUtil.PINE,
      }}
    >
      <CardContent
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          color: "white",
          textAlign: "left",
          padding: {
            xs: "16px", // mobile
            sm: "24px", // small screens and up
          },
        }}
      >
        <Box sx={{ marginRight: 4 }}>
          <LockOutlined sx={{ fontSize: cardIconSize }} />
        </Box>
        <Box>
          <Typography
            component="div"
            sx={{ fontSize: cardTitleSize, lineHeight: "1.2", mb: 1 }}
          >
            {translate("contact.pgp.title")}
          </Typography>
          <Typography
            component="div"
            sx={{ fontSize: paragraphSize, lineHeight: "1.2" }}
          >
            {translate("contact.pgp.subtitle")}
          </Typography>
          <Box sx={{ display: "inline", mr: 1 }}>
            <DownloadButton
              fileName="okrim_public_key.asc"
              label={translate("contact.pgp.download")}
            />
          </Box>
          <TextClipboardButton label={translate("contact.pgp.copy")} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PublicKeyCard;
