import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const StyledLanding = styled.div`
font-family: Montserrat Alternates;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;

.title{
    width: 488px;
    height: 92px;
    left: 139px;
    top: 332px;

    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 130%;
    color: #002537;
}
.text{
    font-size: 20px;
    font-weight: 400;
    font-family: Montserrat;
}
.button{
    font-size: 24px;
    font-weight: 700; 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    background: #E72128;
    box-shadow: 0px 4px 10px rgba(255, 0, 0, 0.3);
    border-radius: 35px;
    margin-top: 2rem;
}

`
export default function Landing() {
    return (
        <StyledLanding>
            <div id='home'>
                <p className='title'>We help you <span style={{ color: '#E72128' }}>Build</span><br /> your digital presence.</p>
                <p className='text'>Placeholder text goes here, something <br />catchy which supports the above heading <br /> and encourage to click below button.</p>
                <button className='button'>Let's Discuss</button>
            </div>
            <div>
                <StaticImage src='../../images/Saly-13.png' height={600} />
            </div>
        </StyledLanding>
    )
}