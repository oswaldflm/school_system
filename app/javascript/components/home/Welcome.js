import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import SchoolIcon from '@mui/icons-material/School';
import Link from '@mui/material/Link';
import "@fontsource/roboto";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
const Welcome = () => {
  return (
    <Container>
      <Grid container spacing={2} className={'Slider'} >
        <Grid xs={12}>
          <Typography variant="h2" align="center">Slider</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={'about_us'} >
        <Grid xs={12}>

          <Typography variant="h5" align="center">Resume about Us</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum ipsum, maximus accumsan turpis sit amet, lobortis aliquam tellus.
            Curabitur non tellus et nisi tincidunt porttitor. Morbi leo urna, faucibus eu ipsum sit amet, fermentum congue massa.
            Suspendisse maximus aliquam urna, non interdum turpis semper id. Phasellus massa ex, auctor sit amet commodo ut, tincidunt at dolor.
            Sed sed mi porta, consequat diam sed, efficitur ligula. Suspendisse lacinia venenatis purus eu mattis.
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Typography variant="h6" >
            Mission
          </Typography>
          <Typography >
            Nulla quis turpis id risus tempus ultrices. Aliquam vulputate ligula at facilisis semper. Ut sollicitudin diam ut mi scelerisque, quis varius ipsum auctor.
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Typography variant="h6" >
            Vission
          </Typography>
          <Typography >
            Nulla quis turpis id risus tempus ultrices. Aliquam vulputate ligula at facilisis semper. Ut sollicitudin diam ut mi scelerisque, quis varius ipsum auctor.
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Typography variant="h6" >
            Valuables
          </Typography>
          <Typography >
            Nulla quis turpis id risus tempus ultrices. Aliquam vulputate ligula at facilisis semper. Ut sollicitudin diam ut mi scelerisque, quis varius ipsum auctor.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={'services'} >
        <Grid xs={12} align="center">
          <Typography variant="h4">Our Services</Typography>
        </Grid>
        <Grid xs={4} align="center">
          <Typography variant="h6"><SchoolIcon />Pre-Escolar</Typography>
          <Typography >
            Nulla quis turpis id risus tempus ultrices. Aliquam vulputate ligula at facilisis semper. Ut sollicitudin diam ut mi scelerisque, quis varius ipsum auctor.
          </Typography>
          <Link target="_blank" color='inherit' href="#" underline="hover"> View Requirement</Link>
        </Grid>
        <Grid xs={4} align="center">
          <Typography variant="h6"><SchoolIcon /> Primaria </Typography>
          <Typography >
            Nulla quis turpis id risus tempus ultrices. Aliquam vulputate ligula at facilisis semper. Ut sollicitudin diam ut mi scelerisque, quis varius ipsum auctor.
          </Typography>
          <Link target="_blank" color='inherit' href="#" underline="hover"> View Requirement</Link>
        </Grid>

        <Grid xs={4} align="center">
          <Typography variant="h6"><SchoolIcon /> Secuandaria</Typography>
          <Typography >
            Nulla quis turpis id risus tempus ultrices. Aliquam vulputate ligula at facilisis semper. Ut sollicitudin diam ut mi scelerisque, quis varius ipsum auctor.
          </Typography>
          <Link target="_blank" color='inherit' href="#" underline="hover"> View Requirement</Link>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={'academic-services'} >
        <Grid xs={12} align="center">
          <Typography variant="h4">Academic Services</Typography>
        </Grid>
        <Grid xs={6} align="center">
          <Typography variant="h6">Noticia Extra curricular</Typography>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid xs={6} align="center">
          <Typography variant="h6">Noticia Extra curricular</Typography>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

    </Container>
  )
}
export default Welcome;