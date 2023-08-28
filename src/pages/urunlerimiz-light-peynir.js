import React from "react";
import Meta from "components/Meta";
import HeroSection3 from "components/HeroSection3";

function UrunlerimizLightPeynirPage(props) {
  return (
    <>
      <Meta title="Urunlerimiz Light Peynir" />
      <HeroSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Light Peynir"
        subtitle="Light Beyaz Peynir hafif ve lezzetli light peyniri kahvaltının yanı sıra diğer öğünlerde de afiyetle yiyebilirsiniz."
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay-sut-light-peynir-web.jpg"
        buttonText="iletişime geç"
        buttonColor="primary"
        buttonPath="/iletisimegec"
      />
    </>
  );
}

export default UrunlerimizLightPeynirPage;
