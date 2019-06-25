import React from 'react'
//import {Link} from 'gatsby'
import styled from 'styled-components'

const HeroDiv= styled.div`
    margin:0;
    display:grid;
    grid-template-columns: 70% 1fr;
    grid-gap:1px;
    .topImageDiv{
      height:100%;
      position:relative;
      a{
        color:#000;
      }
      img{
        width:100%;
        height:100%;
      }
      h2{
        position: absolute;
        margin-top: -55px;
        padding-left: 5px;
        font-size: 30px;
        
      }
    }
    .topImageDiv:nth-child(1){
      grid-column: span 1;
      grid-row: span 2;
      height:100%;
    }
    .sidePostDiv{
      display:grid;
      img{
        width:100%;
        height:100%;
      }
      h2{
        margin:0;
      }
    }
`

const FeaturedHero = props =>{
  return(
   <HeroDiv>{props.children}</HeroDiv>
  )
}

export default FeaturedHero