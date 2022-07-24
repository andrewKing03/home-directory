import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import Image from 'next/image'
const useStyles = makeStyles(typographyStyle);

export default function _error (props) {
  const classes = useStyles();
  const { ...rest } = props;

  const mainContent = <></>

  const topContent = <>
  <Box sx={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
    <Typography className={classes.stupidHeading} >404 horse not found</Typography>
    <Image width='100px' height='100px' src='/img/shorse.png' />
    
  </Box></>

  return (
    <Typography>404040404044</Typography>
  );
}
