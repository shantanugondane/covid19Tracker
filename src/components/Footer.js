import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import classNames from "classnames";

import styles from "../styles/FooterStyles.js";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        <a
          href="https://github.com/KrishayNair/Covid19India_MiniProject"
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(classes.btn, classes.github)}
        >
          Contribute on Github
        </a>
        <a
          href="https://twitter.com/covidnewsbymib?lang=en"
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(classes.btn, classes.twitter)}
        >
          Share on Twitter
        </a>
        <a
          href="https://github.com/PrinceSumberia/covid-19-tracker/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(classes.btn, classes.issue)}
        >
          Report an Issue
        </a>
      </footer>
    );
  }
}
export default withStyles(styles)(Footer);
