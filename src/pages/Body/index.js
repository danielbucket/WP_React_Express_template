import React from 'react'
import { useState } from 'react'
import { BodyContainer } from './body.styled.js'
import robot from '../../assets/robot.jpeg'
import squirrel from '../../assets/squirrel.jpg'

export default function Body() {
  const [image1, setImage1] = useState(robot)
  const [image2, setImage2] = useState(squirrel)

  return (
    <>
      <BodyContainer >
        <p>Robototron</p>
        <img src={ image1 } alt="robot"/>
        <p>Squirrelchongbot</p>
        <img src={ image2 } alt="squirrel"/>
      </BodyContainer>
    </>
  )
}