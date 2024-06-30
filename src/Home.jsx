import Container from "@mui/material/Container";
import ParticleBackground from "./ParticleBackground";

const Home = () => {
    return(
        <Container component="main" sx={{ marginTop:'20px' , padding:'10px', justifyContent: 'center'}}>
            <Container sx={{position: 'absolute', zIndex:-1}}>
                <ParticleBackground />
            </Container>
        </Container>
    )
}

export default Home;