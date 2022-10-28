import React, { Component } from 'react'
import { Grid, Paper } from '@mui/material';
import './MainHome.css';
import styled from "styled-components";
import CarouselBoxPlanex from './CarouselBoxPlanex';
import MovingComponent from 'react-moving-text';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
const classes = {
  rootMainHome: {
    flexGrow: 1,
  },
  paperMainHome: {
    padding: 20,
    textAlign: "center",
    backgroundColor: 'transparent',
    boxShadow: "none",
    backgroundSize:"cover",
    backgroundPosition:"center",
    paddingTop: "20vh"
  }
};
const Button = styled.button`
  background-color: #171717;
  color: white;
  font-size: 150%;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
  
export default class MainHome extends Component {
  render() {
    return (
      <div className='main-css'>
        <div style={classes.rootMainHome}>
        <Grid container direction="row" justifyContent="space-around" alignItems="stretch">
        <Grid item xs={12} sm={12} md={5}>
          <Paper style={classes.paperMainHome}>
          <MovingComponent type="fadeIn" duration="2000ms" delay="0s"  direction="normal" timing="ease" iteration="1" fillMode="none">
            <h1 className='text-h1'>Planex</h1></MovingComponent>
            <div>
              
            <a href="" target="_blank"><Button className='btn-1'>Log in</Button></a></div>
            <a href="" target="_blank"><Button className='btn-2'>Sign up</Button></a>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper style={classes.paperMainHome}>
                <CarouselBoxPlanex></CarouselBoxPlanex>
          </Paper>
        </Grid>
      </Grid>
    </div>
      </div>
    );
  }
}

