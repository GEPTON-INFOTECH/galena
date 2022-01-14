import * as React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem auto;
  align-items: center;
  letter-spacing: 0.1rem;
  .navlinks {
    margin-left: 1.5rem;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: Montserrat;
  }
`
export default function Header () {
  return (
    <StyledHeader>
      <StaticImage src='../../images/gepton.png' height={60} />
      <nav>
        <Link className='navlinks' to='home' spy smooth offset={50} duration={500} style={{ cursor: 'pointer' }}>
          Home
        </Link>
        <Link className='navlinks' to='' spy smooth offset={50} duration={500} style={{ cursor: 'pointer' }}>
          About
        </Link>
        <Link className='navlinks' to='product' spy smooth offset={50} duration={500} style={{ cursor: 'pointer' }}>
          Product
        </Link>
        <Link className='navlinks' to='' spy smooth offset={50} duration={500} style={{ cursor: 'pointer' }}>
          Career
        </Link>
        <Link className='navlinks' to='footer' spy smooth offset={50} duration={500} style={{ cursor: 'pointer' }}>
          Contact
        </Link>
        <Link className='navlinks' to='' spy smooth offset={50} duration={500} style={{ cursor: 'pointer' }}>
          CTA
        </Link>
      </nav>
    </StyledHeader>
  )
}
