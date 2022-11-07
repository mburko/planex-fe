import React, { Component } from 'react'
import styled from 'styled-components';

const MonthHeader = styled('div')`
    display: flex;
    font-size: 200%;
    font-weight: bold;
    font-family: 'Quicksand', sans-serif;
    color: rgba(145,171,165, 1);
    margin: 2%;
    justify-content: space-between;
`;
const ButtonWrapper = styled('button')`
    border: none;
    outline: none;
    background-color: white;
    color: rgba(145,171,165, 1);
    cursor: pointer;
    margin-left: 5px;
    font-weight: 600;
    font-family: 'Quicksand', sans-serif;
    font-size: 100%;
`;
/*const ButtonWrapperEvent = styled('button')`
    border: none;
    outline: none;
    background-color: white;
    border-radius: 50%;
`;*/
const MonthCalendarHeader = ({today, prevHandler, nextHandler}) => {
    return(
        <MonthHeader >
            <div>
                <ButtonWrapper onClick={prevHandler}>{" < "}</ButtonWrapper>
                <ButtonWrapper onClick={nextHandler}>{" > "}</ButtonWrapper>
                <span>  {today.format('MMMM')}</span>
                <span>  {today.format('YYYY')}</span>
            </div>
            <div>
              {/* <ButtonWrapper onClick={prevHandler}>{"< "}</ButtonWrapper>*/ } 
            </div>
        </MonthHeader >
    );

};
export { MonthCalendarHeader };