import React from "react";
import Meta from "components/Meta";
import HeroSection3 from "components/HeroSection3";
import TeamBiosSection from "components/TeamBiosSection";

function UrunlerimizKlasikPeynirPage(props) {
  return (
    <>
      <Meta title="Urunlerimiz Klasik Peynir" />
      <HeroSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Klasik Peynir"
        subtitle="Dağılmayan yapıya sahip olup, küçük çaplı gözenekleri bulunan beyazımtrak açık sarı renkte olan peynir, sütün muhteviyatında bulunan süt yağından kaynaklanan kaymakımsı bir tada sahiptir."
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/klasik+peynir+web+.jpg"
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

export default UrunlerimizKlasikPeynirPage;
