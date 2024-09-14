import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SchoolIcon from "@mui/icons-material/School";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import * as React from "react";
import { useTranslation } from "react-i18next";
import Colors from "../../../utils/colorUtil";
import CustomCard from "../../cards/CustomCard";
import DetailedCustomCard from "../../cards/DetailedCustomCard";
import LinkChips from "./LinkChips";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AboutTabs() {
  const [value, setValue] = React.useState(0);
  const { t: translate } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={translate("about.whoami")} {...a11yProps(0)} />
          <Tab label={translate("about.studies")} {...a11yProps(1)} />
          <Tab label={translate("about.work")} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
          <Grid item xs={12} sm={12}>
            <CustomCard
              title={translate("about.whoami1.title")}
              body={translate("about.whoami1.description")}
              icon={EmojiPeopleIcon}
              bgColor={Colors.SPANISH_ORANGE}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <CustomCard
              title={translate("about.whoami2.title")}
              body={translate("about.whoami2.description")}
              icon={PsychologyIcon}
              bgColor={Colors.SPANISH_ORANGE}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <LinkChips />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
          <Grid item xs={12} sm={12}>
            <DetailedCustomCard
              title={translate("about.studies2.title")}
              date={translate("about.studies2.date")}
              location={translate("about.studies2.location")}
              position={translate("about.studies2.position")}
              body={translate("about.studies2.description")}
              icon={SchoolIcon}
              bgColor={Colors.SPANISH_ORANGE}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <DetailedCustomCard
              title={translate("about.studies1.title")}
              date={translate("about.studies1.date")}
              location={translate("about.studies1.location")}
              position={translate("about.studies1.position")}
              body={translate("about.studies1.description")}
              tags={translate("about.studies1.tags", { returnObjects: true })}
              icon={SchoolIcon}
              bgColor={Colors.SPANISH_ORANGE}
            />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
          <Grid item xs={12} sm={12}>
            <DetailedCustomCard
              title={translate("about.work3.title")}
              date={translate("about.work3.date")}
              location={translate("about.work3.location")}
              position={translate("about.work3.position")}
              body={translate("about.work3.description")}
              tags={translate("about.work3.tags", { returnObjects: true })}
              icon={EngineeringIcon}
              bgColor={Colors.SPANISH_ORANGE}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <DetailedCustomCard
              title={translate("about.work2.title")}
              date={translate("about.work2.date")}
              location={translate("about.work2.location")}
              position={translate("about.work2.position")}
              body={translate("about.work2.description")}
              tags={translate("about.work2.tags", { returnObjects: true })}
              icon={EngineeringIcon}
              bgColor={Colors.SPANISH_ORANGE}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <DetailedCustomCard
              title={translate("about.work1.title")}
              date={translate("about.work1.date")}
              location={translate("about.work1.location")}
              position={translate("about.work1.position")}
              body={translate("about.work1.description")}
              tags={translate("about.work1.tags", { returnObjects: true })}
              icon={EngineeringIcon}
              bgColor={Colors.SPANISH_ORANGE}
            />
          </Grid>
        </Grid>
      </CustomTabPanel>
    </Box>
  );
}
