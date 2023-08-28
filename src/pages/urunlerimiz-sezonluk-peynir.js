import React from "react";
import Meta from "components/Meta";
import HeroSection3 from "components/HeroSection3";

function UrunlerimizSezonlukPeynirPage(props) {
  return (
    <>
      <Meta title="Urunlerimiz Sezonluk Peynir" />
      <HeroSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Sezonluk Peynir"
        subtitle="Sezonluk koyun ve keçi sütlerinden üretilmiştir. Kuru madde de en az %45 süt yağı içerir. Muhafaza Koşulu: 2-4 C'de muhafaza ediniz. Alerjen: Laktoz içerir."
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay-sut-sezonluk-peynir-web.jpg"
        buttonText="İletişime geç"
        buttonColor="primary"
        buttonPath="/iletisimegec"
      />
    </>
  );
}

export default UrunlerimizSezonlukPeynirPage;
