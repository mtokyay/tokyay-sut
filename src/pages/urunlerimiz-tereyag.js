import React from "react";
import Meta from "components/Meta";
import HeroSection3 from "components/HeroSection3";
import TeamBiosSection from "components/TeamBiosSection";

function UrunlerimizTereyagPage(props) {
  return (
    <>
      <Meta title="Urunlerimiz Tereyag" />
      <HeroSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Tereyağ"
        subtitle="Tereyağı, ana maddesi süt yağı olan bir mandıra ürünüdür. Tereyağının bileşiminde yaklaşık %80 oranında süt yağı, su, süt şekeri, mineraller, kolesterin, suda çözülmüş vitaminler, protein, asitler ve aroma veren maddeler yer alır. Tereyağı, gıda ve kozmetik sanayisinde kullanılan bir hammaddedir."
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tereyag+web+.jpg"
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

export default UrunlerimizTereyagPage;
