import React from "react";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  accordion: {
    // Remove shadow
    boxShadow: "none",
    "&:before": {
      // Remove default divider
      display: "none",
    },
    // Add a custom border
    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  expanded: {
    margin: `0 !important`,
  },
  summary: {
    minHeight: 78,
  },
  summaryContent: {
    margin: "0 !important",
  },
}));

function FaqSection(props) {
  const classes = useStyles();

  const items = [
    {
      question: "Peynirler kendi ürünleriniz mi?",
      answer:
        "Evet! Tüm Peynir ve Süt Ürünleri, Balıkesir Gönen'de bulunan fabrikamızda üretilmekte.",
    },
    {
      question: "Herhangi bir katkı madesi kullanıyor musunuz?",
      answer:
        "TOKYAYSÜT Peynirlerinin tamamında SÜT,TUZ ve Maya kullanılır, bunların haricinde hiçbir katkı maddesi veya koruyucu içermez.ilk üretimden beri katkısız ve doğal olarak sofralarınıza ulaşmaktadır.",
    },
    {
      question: "Hangi çeşit maya kullanıyorsunuz?",
      answer: "TOKYAYSÜT Peynirlerininde doğal şırdan mayası kullanılmaktadır.",
    },
    {
      question: "İnternet sayfanızdan alışveriş ne kadar güvenli?",
      answer:
        "Sayfamızda SSL sertifikası ile uçtan uca şifreleme ve kredi kartı ile ödemede IYZICO güvencesi mevcut./p>",
    },
    {
      question: "Web sayfanızda hangi ödeme yöntemleri kullanılıyor?",
      answer: "EFT/Havale ve Iyzico güvencesiyle Kredi Kartı ödemesi mevcut.",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        {items.map((item, index) => (
          <Accordion
            classes={{
              root: classes.accordion,
              expanded: classes.expanded,
            }}
            key={index}
          >
            <AccordionSummary
              classes={{
                root: classes.summary,
                content: classes.summaryContent,
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-panel-${index}`}
            >
              <Typography variant="h6">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails id={`faq-panel-${index}`}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Section>
  );
}

export default FaqSection;
