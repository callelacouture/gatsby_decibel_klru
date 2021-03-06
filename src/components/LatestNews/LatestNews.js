import React from 'react'
//import {Link} from 'gatsby'
import styled from 'styled-components'


const LatestNewsDiv = styled.div`
box-sizing: border-box;
width:80%;
div{
   display:grid;
    grid-template-columns: 30% 70%;
    margin-bottom:20px;
    height: 200px;
    border-bottom: 1px solid #ccc;
    img{
      width:100%;
      height: 200px;
    }
    .latestNewsText{
      padding-left:20px;
      display:block;
      align-items:center;
      h1{
        font-size: 20px;
        margin:0;
        padding-top:10px;
      }
      p{
        font-size: 18px;
        padding: 1px;
        margin-top: 2px;
      }
    }
}
   
`
const LatestNews = props =>{
  return(
    <LatestNewsDiv>{props.children}</LatestNewsDiv>
  )
}

export default LatestNews