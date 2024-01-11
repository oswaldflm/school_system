import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from "@mui/material";
import '@fontsource/roboto'

const Footer = (props) => {
  return (
    <Container sx={{ fontFamily: 'Roboto' }}>
      <Grid container spacing={2} >
        <Grid xs={6}>
          <Typography align='center' variant="h6">
            Encuentranos
          </Typography>
          <Link target="_blank" color='inherit' href="https://maps.app.goo.gl/cPwrij2Df5t6V1JP8" underline="hover" sx={{ display: 'flex' }} >
            <LocationOnIcon />
            <Typography sx={{ marginLeft: '5px' }} >
              Antiguo Cine Salinas 2c. Abajo 2C. Al Sur, Managua, Nicaragua
            </Typography>
          </Link>
          <Link target="_blank" color='inherit' href="mailto: colegioleonardos@gmail.com" underline="hover" sx={{ display: 'flex' }}>
            <EmailIcon />
            <Typography sx={{ marginLeft: '5px' }}>
              colegioleonardos@gmail.com
            </Typography>
          </Link>

          <Link target="_blank" color='inherit' href="tel: +50522508727" underline="hover" sx={{ display: 'flex' }}>
            <PhoneIcon />
            <Typography sx={{ marginLeft: '5px' }} >
              +505 2250 8727
            </Typography>
          </Link>

        </Grid>
        <Grid xs={6}>
          <Typography align='center' variant="h6">
            Redes Sociales
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }} align='center'>
            <Link target="_blank" color='inherit' href="tel: +50522508727" underline="hover" sx={{ display: 'flex' }}>
              <WhatsAppIcon />
            </Link>
            <Link target="_blank" color='inherit' href="tel: +50522508727" underline="hover" sx={{ display: 'flex' }}>
              <FacebookIcon />
            </Link>
            <Link target="_blank" color='inherit' href="tel: +50522508727" underline="hover" sx={{ display: 'flex' }}>
              <YouTubeIcon />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )

}

export default Footer;
