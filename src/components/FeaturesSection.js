import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },

    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(3)}px`,
    },
  },
  figure: {
    maxWidth: 300,
    margin: "30px auto",
  },
  image: {
    height: "auto",
    maxWidth: "100%",
  },
}));

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Ispanaklı Peynirli Strata",
      description:
        "Bu kez sadece rendelenmiş kaşar peynirle lezzeti uzatmakla kalmadık, bir de lor peynirden destek aldık. Sağ olsun, kırmadı, hemen geldi. Ispanaklar da dahil olunca ortalık şenlik yerine döndü.",
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/ispanakli-peynirli-strata-tarifi.jpg",
    },
    {
      title: "Çıtır Kaşar Peyniri Çubukları",
      description:
        "Bu kez çok uzattık, farkındayız. Ama kaşar peynirinin sonsuz lezzetini uzatmaktan öte bir şey yapamazdık. Kim hemen bitsin ister ki zaten?",
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/citir-kasar-peyniri-cubuklari-tarifi.webp",
    },
    {
      title: "Fırında Tavuklu Patlıcan",
      description:
        "Tavuk ve patlıcanın birbirine nasıl da yakıştığını, bir araya gelince nasıl da damak çatlattıklarını bilmiyorsanız, elinizi çabuk tutun. Yoksa bu muhteşem ikiliyi denemeden geçirdiğiniz her gün için üzülürsünüz.",
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/tavuklu-patlican-tarifi.jpg",
    },
    {
      title: "Fırında Domatesli Makarna",
      description:
        "Ay sonu yaklaştığında kullanırken daha bir dikkatli olmaya çalıştığımız o cüzdanları rahatlatacak ama öyle kuru kuru makarna yapmaktan da öteye geçecek bir yemeği kim istemez ki?",
      image:
        "https://tokyaykereste.s3.eu-central-1.amazonaws.com/firinda-domatesli-makarna.jpg",
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
        <Container
          maxWidth="md"
          disableGutters={true}
          className={classes.itemsContainer}
        >
          {items.map((item, index) => (
            <Grid
              className={classes.row}
              container={true}
              item={true}
              alignItems="center"
              spacing={4}
              key={index}
            >
              <Grid item={true} xs={12} md={6}>
                <Box
                  textAlign={{
                    xs: "center",
                    md: "left",
                  }}
                >
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <figure className={classes.figure}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={classes.image}
                  />
                </figure>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
