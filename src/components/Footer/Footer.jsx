import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';




export default function Footer() {

    const handleClick = (url) => {
        window.open(url , "_blank");
     }


  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Ayuda</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contacto
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Soporte
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Cuenta</Box>
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Registrarse
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Redes</Box>
              <Box>
                <InstagramIcon type="button" onClick={() => handleClick("https://www.instagram.com/") }>
                    instagram
                </InstagramIcon>
              </Box>
              <Box>
                <FacebookIcon type="button" onClick={() => handleClick("https://www.facebook.com/")}>
                  Facebook
                </FacebookIcon>
              </Box>
              <Box>
                <EmailIcon href="/" color="inherit">
                  Email
                </EmailIcon>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Cop´r Drop &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}