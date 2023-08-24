import React from "react";
import Meta from "components/Meta";
import HeroSection3 from "components/HeroSection3";
import TeamBiosSection from "components/TeamBiosSection";

function UrunlerimizBeyazPeynirPage(props) {
  return (
    <>
      <Meta title="Urunlerimiz Beyaz Peynir" />
      <HeroSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Beyaz Peynir"
        subtitle="Beyaz peynir koyun, inek veya keçi sütünden yapılan, salamurada bekletilerek hazırlanan beyaz renkli bir Türk peynirdir. Beyaz peynir Türkiye ve komşu ülkelerinde tercih edilen peynir türüdür. Özellikle kahvaltıda tüketilen beyaz peynir, ayrıca börek, pide, makarna ve diğer hamur işleri için de sıkça kullanılır."
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/beyaz+peynir.jpg"
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

export default UrunlerimizBeyazPeynirPage;
