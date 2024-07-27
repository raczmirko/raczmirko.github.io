import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import birdcam_2 from "../../../assets/img/birdcam/birdcam_2.jpg";
import DisplayCard from "../../cards/DisplayCard";

const PublicationCards = () => {
  const { t: translate } = useTranslation();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <DisplayCard
        title={translate("academic.publications.birdcam.title")}
        summary={translate("academic.publications.birdcam.summary")}
        description={translate("academic.publications.birdcam.description")}
        date={translate("academic.publications.birdcam.date")}
        location={translate("academic.publications.birdcam.location")}
        image={birdcam_2}
        link={"https://isze.hu/wp-content/uploads/2021/09/Inspiracio2021_3.pdf"}
      />
    </Box>
  );
};
export default PublicationCards;
