import * as React from 'react'
import styled from 'styled-components'
import Header from '../components/molecules/Header'

const Main = styled.main`
  margin-left: 10%;
  margin-right: 10%;
`

// markup
const IndexPage = () => {
  return (
    <Main>
      <title>GEPTON | One stop to all your digital needs.</title>
      <Header />
    </Main>
  )
}

export default IndexPage
