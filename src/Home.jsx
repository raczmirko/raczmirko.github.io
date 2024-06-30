import Container from "@mui/material/Container";
import ParticleBackground from "./ParticleBackground";
import PageHeader from "./PageHeader";
import Colors from "./colorUtil";

const Home = () => {
    return(
        <Container component="main" sx={{ marginTop:'20px' , padding:'10px', justifyContent: 'center'}}>
            <Container sx={{position: 'absolute', zIndex:-1}}>
                <ParticleBackground />
            </Container>
            <PageHeader text='Home - What is this site about?' bgColor={Colors.PINE}/>
        </Container>
    )
}

export default Home;