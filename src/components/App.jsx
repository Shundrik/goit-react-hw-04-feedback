import React from "react";
import styled from "styled-components";
import { Review } from "./Review/Review";


const Wrapper = styled.div`
display: flex; 
justify-content: center; 
  /* width:1200px; */
/* margin: 0 auto; */
min-height:100vh;
padding:20px;
background:black;
color:white;

`

export const App = () => {
  return (
    <Wrapper>
         <Review/>
    </Wrapper>
  );
};