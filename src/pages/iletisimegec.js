import React from "react";
import Meta from "components/Meta";
import ContactSection2 from "components/ContactSection2";

function IletisimegecPage(props) {
  return (
    <>
      <Meta title="Iletisimegec" />
      <ContactSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="İletişime Geç"
        subtitle=""
        buttonText="Mesaj at"
        buttonColor="primary"
        showNameField={true}
      />
    </>
  );
}

export default IletisimegecPage;
