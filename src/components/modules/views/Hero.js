import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "../components/Typography";
import HeroLayout from "./HeroLayout";

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80";

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
});

function Hero(props) {
  const { classes } = props;

  return (
    <HeroLayout backgroundClassName={classes.background}>
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Clarity. Creativity. Clevertize.
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        We create magic by making smarter advertising a reality. We stride
        towards scaling growth and inspiring knowledge.
      </Typography>
    </HeroLayout>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);
