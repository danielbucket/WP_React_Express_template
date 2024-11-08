import React from 'react'
import { BodyContainer } from './body.styled.js'
import robot from '../../assets/robot.jpeg'
import squirrel from '../../assets/squirrel.jpeg'

export default function Body() {

  return (
    <>
      <BodyContainer >
        <h1>Robototron</h1>
        <img src={ robot } alt="robot"/>
        <img src={ squirrel } alt="robot"/>
      </BodyContainer>
    </>
  )
}