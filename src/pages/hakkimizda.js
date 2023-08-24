import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";
import FeaturesSection2 from "components/FeaturesSection2";
import FeaturesSection3 from "components/FeaturesSection3";
import TeamBiosSection from "components/TeamBiosSection";
import CtaSection from "components/CtaSection";
import StatsSection from "components/StatsSection";

function HakkimizdaPage(props) {
  return (
    <>
      <Meta title="Hakkimizda" />
      <HeroSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Hakkımızda"
        subtitle="Kaz Dağlarında üretilen sütlerin toplanıp, Balıkesir Koyuneri'deki peynir fabrikamızda işlenmesiyle elde edilen %100 doğal peynirlerdir. "
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/yol+tabelas%C4%B1+psd.jpg"
        buttonText="İletişime Geç"
        buttonColor="primary"
        buttonPath="/iletisimegec"
      />
      <FeaturesSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/s%C3%BCt+fabrika_.jpg"
      />
      <FeaturesSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Üretim"
        subtitle=""
      />
      <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      <CtaSection
        bgColor="primary"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Sipariş verin"
        subtitle=""
        buttonText="İLETİŞİME GEÇ"
        buttonColor="default"
        buttonPath="/iletisimegec"
      >
        <StatsSection
          bgColor="light"
          size="medium"
          bgImage=""
          bgImageOpacity={1}
        />
      </CtaSection>
    </>
  );
}

export default HakkimizdaPage;
