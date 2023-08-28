import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";
import ContentCardsSection from "components/ContentCardsSection";
import CtaSection from "components/CtaSection";
import StatsSection from "components/StatsSection";
import ContentCardsSection2 from "components/ContentCardsSection2";
import FeaturesSection from "components/FeaturesSection";
import TeamBiosSection2 from "components/TeamBiosSection2";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bgColor=" "
        size="large"
        bgImage="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay-but-peynir-gorsel-giris.jpg"
        bgImageOpacity={100}
        title="  "
        subtitle="  "
        buttonText="İletişime geç"
        buttonColor="big"
        buttonPath="/pricing"
      />
      <ContentCardsSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Ürünlerimiz"
        subtitle=""
      >
        <CtaSection
          bgColor="primary"
          size="medium"
          bgImage=""
          bgImageOpacity={1}
          title="Sipariş verin"
          subtitle=""
          buttonText="İLETİŞİME GEÇ"
          buttonColor="default"
          buttonPath="/pricing"
        >
          <StatsSection
            bgColor="light"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
          />
        </CtaSection>
      </ContentCardsSection>
      <ContentCardsSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Yemek Tarifleri"
        subtitle=""
      />
      <TeamBiosSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
    </>
  );
}

export default IndexPage;
