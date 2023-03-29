import React, { useContext } from 'react'
import Hearth from '../components/Hearth'
import { MyContext } from '../MyContext'

const HomePage = () => {

  const usuario = useContext(MyContext)
  return (
    <div>
      <h1>HomePage</h1>
      <Hearth filled={true} />
    </div>
  )
}

export default HomePage
