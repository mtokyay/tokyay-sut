import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "util/analytics";
import Chat from "components/Chat";
import { ThemeProvider } from "util/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <>
        <Chat />
        <>
          <Navbar
            color="default"
            logo="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay+sut+web+sitesi+logo+.svg"
            logoInverted="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay+sut+web+sitesi+logo+.svg"
          />

          <Component {...pageProps} />

          <Footer
            bgColor="default"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            copyright={`© ${new Date().getFullYear()} Company`}
            logo="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay+sut+web+sitesi+logo+.svg"
            logoInverted="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay+sut+web+sitesi+logobeyaz+.svg"
            sticky={true}
          />
        </>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
