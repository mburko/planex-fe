import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import './AboutUs.css';
import {AnimatedOnScroll} from "react-animated-css-onscroll";

import { Grid, Paper } from '@mui/material';

const classes = {
    root: {
      flexGrow: 1,
      padding:"2% 5% 0 13%"
    },
    paper: {
      textAlign: "center",
      backgroundColor: 'transparent',
      boxShadow: "none",
      backgroundSize:"cover",
      backgroundPosition:"center",
      paddingTop: "15%"

    }
  };
export default class AboutUs extends Component {
  render() {
    return (
      <div id="AboutUs" className='aboutUs-back'>
        <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeOut"><h1 className=' text-aboutus-h2-h' style={{'color':'#91ABA5'}}>About us</h1></AnimatedOnScroll>
        <div style={classes.root}>
        <Grid container direction="row"   justifyContent="center" alignItems="flex-start">
            <Grid item xs={12} sm={4}>
                <Paper style={classes.paper}> 
                <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut" animationInDelay={600}>
                    <h2 className='text-aboutus-h2'>Our story<hr/></h2>
                    <p className='text-aboutus'>Wherever you are, take your to do list with you. Access Planex on mobile, laptop, desktop, tablet and even your watch! Your tasks are automatically synced across all of your devices, giving you ultimate control.</p>
                </AnimatedOnScroll></Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper style={classes.paper}>
                <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut" animationInDelay={750}>
                    <h2 className='text-aboutus-h2'>Conseption<hr/></h2>
                    <p className='text-aboutus'>Wherever you are, take your to do list with you. Access Planex on mobile, laptop, desktop, tablet and even your watch! Your tasks are automatically synced across all of your devices, giving you ultimate control.</p>
                </AnimatedOnScroll>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper style={classes.paper}>
                <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut" animationInDelay={900}>
                    <h2 className='text-aboutus-h2'>Benefits<hr/></h2>
                    <p className='text-aboutus'>Wherever you are, take your to do list with you. Access Planex on mobile, laptop, desktop, tablet and even your watch! Your tasks are automatically synced across all of your devices, giving you ultimate control.</p>
                </AnimatedOnScroll>
                </Paper>
            </Grid>
        </Grid></div>
        
    </div>

    )
  }
}
