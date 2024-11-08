import React from 'react'
import { BodyContainer } from './body.styled.js'
import robot from '../../assets/robot.jpeg'

export default function Body() {

  return (
    <>
      <BodyContainer >
        <h1>Robototron</h1>
        <image src={robot} alt="robot" />
      </BodyContainer>
    </>
  )
}