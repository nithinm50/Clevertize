import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.dark,
    flexGrow: 1
  },
  image: {
    width: 160,
    height: "auto"
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex"
  },
  iconsWrapper: {
    height: 120
  },
  icons: {
    display: "flex"
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark
    }
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0
  },
  listItem: {
    color: theme.palette.ternary.light,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  },
  center: {
    textAlign: "center"
  }
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} className={classes.center}>
            <img
              src="https://clevertize.com/assets/images/logo-white.png"
              alt="DigiPlus 2020 by ET Brand Equity"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/">About Us</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/">Work</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/">Clients</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/">Services</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/">Blog</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/">What's Happening</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/">Careers</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="caption">
              {"Icons made by "}
              <Link
                href="https://www.freepik.com"
                rel="sponsored"
                title="Freepik"
              >
                Freepik
              </Link>
              {" from "}
              <Link
                href="https://www.flaticon.com"
                rel="sponsored"
                title="Flaticon"
              >
                www.flaticon.com
              </Link>
              {" is licensed by "}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="caption">
              {"Icons made by "}
              <Link
                href="https://www.freepik.com"
                rel="sponsored"
                title="Freepik"
              >
                Freepik
              </Link>
              {" from "}
              <Link
                href="https://www.flaticon.com"
                rel="sponsored"
                title="Flaticon"
              >
                www.flaticon.com
              </Link>
              {" is licensed by "}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
