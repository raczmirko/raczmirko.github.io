import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import AboutTabs from "../../components/pages/about/AboutTabs";
import ParticleBackground from "../../components/common/ParticleBackground";
import TitleCard from "../../components/common/TitleCard";
import Colors from "../../utils/colorUtil";

const About = () => {
  const { t: translate } = useTranslation();
  return (
    <Container
      component="main"
      sx={{ marginTop: "20px", padding: "10px", justifyContent: "center" }}
    >
      <Container sx={{ position: "absolute", zIndex: -1 }}>
        <ParticleBackground />
      </Container>
      <TitleCard
        title={translate("about.title")}
        subtitle={translate("about.subtitle")}
        bgColor={Colors.CYAN}
        textColor={"black"}
      />
      <AboutTabs />
    </Container>
  );
};

export default About;
