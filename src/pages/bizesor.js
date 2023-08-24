import React from "react";
import Meta from "components/Meta";
import ContactSection2 from "components/ContactSection2";

function BizesorPage(props) {
  return (
    <>
      <Meta title="Bizesor" />
      <ContactSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Bize Sor"
        subtitle=""
        buttonText="Mesaj at"
        buttonColor="primary"
        showNameField={true}
      />
    </>
  );
}

export default BizesorPage;
