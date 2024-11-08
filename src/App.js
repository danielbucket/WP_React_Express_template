import React from 'react'
import Header from './pages/Header'
import Body from './pages/Body'
import Footer from './pages/Footer'
import { AppContainer } from './app.styled.js'

export default function App() {

  return (
    <>
      <AppContainer >
        <Header />
        <Body />
        <Footer />
      </AppContainer>
    </>
  )
}