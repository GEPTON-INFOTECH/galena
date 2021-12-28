import * as React from 'react'
import Footer from '../components/molecules/Footer'
import Header from '../components/molecules/Header'

export default function Main (props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
