import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden"
  },
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    marginBottom: theme.spacing(2)
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  image: {
    width: "100%",
    height: "auto"
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7
  }
});

function Clients(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          Clients
        </Typography>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/ebay.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/metro.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/tata.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/bbq.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/dlt.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/jtp.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/koltepatil.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/sobha.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/nandos.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/chilis.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/purvankara.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/sayaji.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/biere_club.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/katoomba.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/iamhere.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/clients/long_bar.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

Clients.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Clients);
