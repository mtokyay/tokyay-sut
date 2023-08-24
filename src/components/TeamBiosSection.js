import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

function TeamBiosSection(props) {
  const classes = useStyles();

  const items = [
    {
      avatar:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/g%C3%BCvenli+al%C4%B1%C5%9Fveri%C5%9F+icon-.jpg",
      name: "Güvenli Alışveriş",
      role: "Alışverişleriniz, TOKYAYSÜT ile güvende",
      bio: "",
    },
    {
      avatar:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/telefon+ile+sipari%C5%9F+icon+.jpg",
      name: "Telefon ile Sipariş ",
      role: "0266 762 60 30",
      bio: "",
    },
    {
      avatar:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/kaliteli+hizmet+icon+-.jpg",
      name: "Kaliteli Hizmet",
      role: "%100 Doğal Ürünler, Gelişmiş Teknoloji, İşinin Ehli Ustalar",
      bio: "",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container={true} justifyContent="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardContent>
                  <Box className={classes.avatarWrapper}>
                    <Avatar
                      src={item.avatar}
                      alt={item.name}
                      className={classes.avatar}
                    />
                  </Box>
                  <Box textAlign="center" pt={3}>
                    <Typography variant="body2" component="p">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.role}
                    </Typography>
                    <Box mt={2}>
                      <Typography variant="body1" component="p">
                        {item.bio}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;
