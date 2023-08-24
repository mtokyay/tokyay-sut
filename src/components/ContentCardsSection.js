import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 160,
  },
}));

function ContentCardsSection(props) {
  const classes = useStyles();

  const items = [
    {
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/beyaz+peynir.jpg",
      title: "Beyaz Peynir",
      body: "",
      url: "/urunlerimiz-beyaz-peynir",
    },
    {
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/lor-peyniri-web+.jpg",
      title: "Lor Peyniri",
      body: "",
      url: "/urunlerimiz-lor-peyniri",
    },
    {
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/klasik+peynir+web+.jpg",
      title: "Klasik Peynir",
      body: "",
      url: "/urunlerimiz-klasik-peynir",
    },
    {
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/tereyag+web+.jpg",
      title: "Tereyağ",
      body: "",
      url: "/urunlerimiz-tereyag",
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
            <Grid item={true} xs={12} md={6} lg={3} key={index}>
              <Card>
                <Link href={item.url} passHref={true}>
                  <CardActionArea component="a">
                    <CardMedia
                      image={item.image}
                      title={item.name}
                      className={classes.media}
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom={true}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default ContentCardsSection;
