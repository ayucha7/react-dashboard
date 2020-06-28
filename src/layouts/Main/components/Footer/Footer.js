import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography variant="body1">
        &copy;{'Helical Tech'}
        <Link
          component="a"
          href="https://www.helicaltech.com/"
          target="_blank"
        ><br/>
          Ayush Chandel 
        </Link>
         &nbsp;&nbsp;2020
      </Typography>
      <Typography variant="caption">
        Developed For Helical Insights
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
