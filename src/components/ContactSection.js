import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Contact from "components/Contact";

const useStyles = makeStyles((theme) => ({
  map: {
    border: 0,
    width: "100%",
    height: "320px",
    backgroundColor: "#efefef",
    // Use some CSS to give the embedded map a dark mode
    // since Google Maps embeds don't support it yet.
    filter: theme.palette.type === "dark" && "invert(90%)",
  },
}));

function ContactSection(props) {
  const classes = useStyles();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="lg">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} md={6}>
            <iframe
              className={classes.map}
              src={props.embedSrc}
              title="Contact Map"
              frameBorder={0}
            />
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <Contact
              showNameField={props.showNameField}
              buttonText={props.buttonText}
              buttonColor={props.buttonColor}
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default ContactSection;
