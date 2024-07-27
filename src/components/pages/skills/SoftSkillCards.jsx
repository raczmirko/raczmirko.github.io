import * as Icons from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import skillsData from "../../../assets/skills.json";
import Colors from "../../../utils/colorUtil";
import CustomCard from "../../cards/CustomCard";

const SoftSkillCards = () => {
  const { t: translate } = useTranslation();
  return (
    <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
      {skillsData.softSkills.map((skill, index) => {
        const IconComponent = Icons[skill.icon];
        return (
          <Grid item xs={12} sm={6} key={index}>
            <CustomCard
              icon={IconComponent ? IconComponent : null}
              title={translate(skill.name)}
              body={translate(skill.description)}
              bgColor={Colors.TEAL}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SoftSkillCards;
