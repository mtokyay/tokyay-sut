import React from "react";
import Meta from "components/Meta";
import FaqSection from "components/FaqSection";
import TeamBiosSection from "components/TeamBiosSection";
import CtaSection from "components/CtaSection";

function SssPage(props) {
  return (
    <>
      <Meta title="Sss" />
      <FaqSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Sıkça Sorulan Sorular"
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
        title="Bize Sorun"
        subtitle=""
        buttonText="Soru Sor "
        buttonColor="default"
        buttonPath="/bizesor"
      />
    </>
  );
}

export default SssPage;
