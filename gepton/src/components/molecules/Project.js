import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const COLORS = {
  secondary: '#E72128',
  primary: '#002537'
}

const StyledProject = styled.div`

font-family: Montserrat Alternates;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  margin-top: 8rem;

.title{
    margin-left:8rem;
    color:black ;
    width: 504px;
    height: 146px;
    left: 801px;
    top: 2000px;

    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 158%;
    letter-spacing: 0.05em;
}
.content{
    margin-left:8rem;
    font-family: Montserrat;
    width: 504px;
    height: 94px;
    left: 801px;
    top: 2195px;

    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 158%;
    letter-spacing: 0.05em;
}
`
export default function Project () {
  return (
    <StyledProject id='product'>
      <div>
        <StaticImage src='../../images/product.png' height={600} />
      </div>
      <div>
        <p className='title'>We build<span style={{ color: COLORS.secondary }}> app</span><br /> solutions.</p>
        <p className='content'>Highly scalable apps for boosting your <br />business to moon 🚀</p>
        <p className='content'>Highly scalable apps for boosting your <br />business to moon 🚀</p>
        <p className='content'>Highly scalable apps for boosting your <br />business to moon 🚀</p>
      </div>
    </StyledProject>
  )
}
