import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ChatIcon from "@material-ui/icons/Chat";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import PetsIcon from "@material-ui/icons/Pets";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    padding: `0 ${theme.spacing(4)}px`,
  },
  imageWrapper: {
    margin: "0 auto",
    maxWidth: 570,
    width: "100%",
    "& > img": {
      width: "100%",
    },
  },
  row: {
    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(2)}px`,
    },
  },
}));

function FeaturesSection2(props) {
  const classes = useStyles();

  const items = [
    {
      title: "",
      description: "",
      icon: ChatIcon,
      iconColor: "primary.main",
    },
    {
      title: "",
      description:
        "Peynirleri eşsiz yapan özelliği, bu coğrafyanın doğal bitki örtüsü ve su kaynaklarıyla beslenen hayvanlarından elde edilen sütlerdir. Bu bitki örtüsü bol yağış ile birlikte zengin bir bitki örtüsü ve bol oksijen sağlamaktadır. Hayvanların bu coğrafyada yediği otlar direkt olarak sütün lezzet ve rahyasını etkilediği için bu özellik peynire çok özel ve kendine özgü bir lezzet katmaktadır.",
      icon: VideogameAssetIcon,
      iconColor: "secondary.main",
    },
    {
      title: "",
      description:
        "Dağılmayan yapıya sahip olup küçük çaplı gözenekleri bulunan beyazımtrak açık sarı renkte olan peynir, sütün muhteviyatında bulunan süt yağından kaynaklanan kaymakımsı bir tada sahiptir. Bu tadı ve lezzeti daha ilk yudumda hissettiren yöre klasik peyniri orijinal tat ve özelliği ile muhteşem beğeni toplamaktadır. ",
      icon: PetsIcon,
      iconColor: "#00d1b2",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className={classes.container}>
        <Grid container={true} alignItems="center" spacing={8}>
          <Grid container={true} item={true} direction="column" xs={12} md={6}>
            <figure className={classes.imageWrapper}>
              <img src={props.image} alt="" />
            </figure>
          </Grid>
          <Grid item={true} xs={12} md={6}>
            {items.map((item, index) => (
              <Grid
                className={classes.row}
                item={true}
                container={true}
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                key={index}
              >
                <Grid item={true} xs="auto" />
                <Grid item={true} xs={true}>
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default FeaturesSection2;
