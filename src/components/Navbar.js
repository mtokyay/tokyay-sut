import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar2 from "components/Navbar2";
import { useDarkMode } from "util/theme";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 28,
    marginRight: theme.spacing(2),
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <Navbar2
      color="default"
      logo="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay+sut+web+sitesi+logo+.svg"
      logoInverted="https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyay+sut+web+sitesi+logobeyaz+.svg"
    />
  );
}

export default Navbar;
