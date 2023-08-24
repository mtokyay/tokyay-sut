import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import AspectRatio from "components/AspectRatio";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    // Add border that contrasts lightly with background color.
    // We use boxShadow so that it's hidden around outer edge
    // due to container <Card> having overflow: hidden
    boxShadow: `1px 1px 0 0 ${emphasize(theme.palette.background.paper, 0.08)}`,
    textAlign: "center",
  },
  imageContainer: {
    margin: "0 auto",
    maxWidth: "200px",
    marginBottom: "30px",
    "& img": {
      width: "100%",
    },
  },
}));

function FeaturesSection3(props) {
  const classes = useStyles();

  const items = [
    {
      title: "En klasik yöntemlerle sütün doğallığını bozmadan pişirilen süt.",
      body: "",
      image: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/lor+psd.jpg",
    },
    {
      title: "Mis gibi kokan yağlı topak lor",
      body: "",
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/peynir+2+.jpg",
    },
    {
      title:
        "Dağılmayan yapıya sahip olup, küçük çaplı gözenekleri bulunan beyazımtrak açık sarı renkte olan peynir, sütün muhteviyatında bulunan süt yağından kaynaklanan kaymakımsı bir tada sahiptir.",
      body: "",
      image: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/peynir.jpg",
    },
    {
      title:
        "Tamamen doğal yöntemlere bekletilip olgunlaştırılan klasik peynir.",
      body: "",
      image: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/DSCF4333.jpg",
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
        <Card raised={false}>
          <Grid container={true}>
            {items.map((item, index) => (
              <Grid
                item={true}
                xs={12}
                md={6}
                className={classes.gridItem}
                key={index}
              >
                <Box p={6}>
                  <div className={classes.imageContainer}>
                    <AspectRatio ratio={4 / 3}>
                      <img src={item.image} alt={item.title} />
                    </AspectRatio>
                  </div>
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">{item.body}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection3;
