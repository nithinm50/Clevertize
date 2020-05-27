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
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
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
  },
  button: {
    marginTop: theme.spacing(8)
  }
});

function Awards(props) {
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
          Awards
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/awards/dg_silver-1.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  DigiPlus 2020 by ET Brand Equity
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/awards/bbq-3-1.png"
                  alt="Big Bang Awards 2019"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Big Bang Awards 2019
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src="https://clevertize.com/assets/images/awards/dg_gold-1.png"
                  alt="DigiPlus 2020 by ET Brand Equity"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  DigiPlus 2020 by ET Brand Equity
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

Awards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Awards);
