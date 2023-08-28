import React from "react";
import Meta from "components/Meta";
import HeroSection3 from "components/HeroSection3";
import TeamBiosSection from "components/TeamBiosSection";

function UrunlerimizLorPeyniriPage(props) {
  return (
    <>
      <Meta title="Urunlerimiz Lor Peyniri" />
      <HeroSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Lor Peyniri"
        subtitle="Lor, yumuşak kıvamlı peynir altı suyunun pıhtılaştırılması ile elde edilen bir mandıra ürünüdür. "
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay-sut-lor-peynir-web.jpg"
        buttonText="sipariş ver"
        buttonColor="primary"
        buttonPath="/iletisimegec"
      />
      <TeamBiosSection
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

export default UrunlerimizLorPeyniriPage;
