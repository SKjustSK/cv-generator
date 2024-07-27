import UserInterface from './components/UserInterface'
import CVHolder from './components/CVHolder'
import { useState } from 'react'
import personalDetailsFormat from './data/personDetailsFormat'
import educationBackgroundFormat from './data/educationBackgroundFormat'

function App() {
  // Setting up initial inputValues
  let initialInputValues = {
    personalDetails: {},
    educationBackground: {},
    workExperience: [],
    technicalSkills: [],
  }
  personalDetailsFormat.forEach((field) => {
    initialInputValues.personalDetails[field.id] = ''
  })
  educationBackgroundFormat.forEach((field) => {
    initialInputValues.educationBackground[field.id] = ''
  })

  const [inputValues, setInputValues] = useState(initialInputValues)

  return (
    <div className="relative box-border flex min-h-screen bg-[#131313] font-roboto">
      <UserInterface
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
      <CVHolder />
    </div>
  )
}

export default App
