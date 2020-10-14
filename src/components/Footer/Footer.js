import React from "react";
//
//
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//
//
import logo from "../../images/logo-bookmark-footer.svg";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
//
//
//
//
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.common.VeryDarkBlue,
    padding: "2em",
    color: "white",
  },
  logo: {
    margin: "1em 2em",
  },
  pages: {
    margin: "1em 2em",
    fontWeight: 400,
    letterSpacing: 3,
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
    },
  },
  socialIcons: {
    margin: "1em .5em",
  },
}));
//
//
//
//
function Footer() {
  //
  //
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  //
  //
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid item container justify="center" xs={12} md={2}>
        <img src={logo} alt="bookmark logo" className={classes.logo} />
      </Grid>
      <Grid item container justify="center" xs={12} md={2}>
        <Typography className={classes.pages}>FEATURES</Typography>
      </Grid>
      <Grid item container justify="center" xs={12} md={2}>
        <Typography className={classes.pages}>PRICE</Typography>
      </Grid>
      <Grid item container justify="center" xs={12} md={2}>
        <Typography className={classes.pages}>CONTACT</Typography>
      </Grid>
      <Grid item container justify={matchesSm ? "center" : null} xs={12} md={4}>
        <img
          src={facebookIcon}
          alt="facebook icon"
          className={classes.socialIcons}
        />
        <img
          src={twitterIcon}
          alt="twitter icon"
          className={classes.socialIcons}
        />
      </Grid>
    </Grid>
  );
}
//
//
export default Footer;
