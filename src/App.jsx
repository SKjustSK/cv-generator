import { useState } from 'react'
import UserInterface from './components/UserInterface'
import CVholder from './components/CVholder'

function App() {
  return (
    <div className="relative box-border flex h-[100%] w-[100%] bg-[#131313] font-roboto">
      <UserInterface />
      <CVholder />
    </div>
  )
}

export default App
