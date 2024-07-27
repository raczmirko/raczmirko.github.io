import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import DisplayCard from "../../cards/DisplayCard";

const AchievementCards = () => {
  const { t: translate } = useTranslation();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <DisplayCard
        title={translate("academic.achievements.one.title")}
        summary={translate("academic.achievements.one.summary")}
        description={translate("academic.achievements.one.description")}
        date={translate("academic.achievements.one.date")}
      />
      <DisplayCard
        title={translate("academic.achievements.two.title")}
        summary={translate("academic.achievements.two.summary")}
        description={translate("academic.achievements.two.description")}
        date={translate("academic.achievements.two.date")}
      />
    </Box>
  );
};
export default AchievementCards;
