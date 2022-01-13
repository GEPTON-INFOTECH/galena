import * as React from 'react'
import styled from 'styled-components'
import Layout from '../layouts/main'
import Landing from '../components/molecules/Landing'

const Main = styled.main`
  margin-left: 10%;
  margin-right: 10%;
`

// markup
const IndexPage = () => {
  return (
    <Main>
      <title>GEPTON | One stop to all your digital needs.</title>
      <Layout>
        <Landing />
        {/* content */}
      </Layout>
    </Main>
  )
}

export default IndexPage
