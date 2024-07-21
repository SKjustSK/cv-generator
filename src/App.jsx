import { useState } from 'react'
import UserInterface from './components/UserInterface'
import CVholder from './components/CVholder'

function App() {
  return (
    <div className="font-roboto relative box-border flex h-screen bg-[#201f24]">
      <UserInterface />
      <CVholder />
    </div>
  )
}

export default App
