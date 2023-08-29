import React from "react";
import Meta from "components/Meta";
import ContactSection from "components/ContactSection";

function ContactPage(props) {
  return (
    <>
      <Meta title="Contact" />
      <ContactSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Bizimle İletişime Geçin"
        subtitle=""
        buttonText="Mesaj at"
        buttonColor="primary"
        showNameField={true}
        embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805.499812087944!2d27.679982509645193!3d40.10393977241859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b691d1f5b0b07d%3A0x43ab01731288ad75!2sTokyay%20Bah%C3%A7e!5e0!3m2!1str!2str!4v1693290958924!5m2!1str!2str"
      />
    </>
  );
}

export default ContactPage;
