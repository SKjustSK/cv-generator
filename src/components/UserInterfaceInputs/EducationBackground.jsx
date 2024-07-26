import TextBox from './userInputs/TextBox'
import PrimaryButton from './PrimaryButton'
import { useState } from 'react'
import educationBackgroundFormat from '../../data/educationBackgroundFormat'

function EducationBackground({ title }) {
  // Tracks user input in each TextBox
  let initialInputValues = {}
  educationBackgroundFormat.forEach((field) => {
    initialInputValues[field.id] = ''
  })
  const [inputValues, setInputValues] = useState(initialInputValues)
  const hanldeInputValue = (fieldId, newInputValue) => {
    setInputValues({ ...inputValues, [fieldId]: newInputValue })
  }

  // Tracks errors for the inputs in each TextBox
  let initialErrors = {}
  educationBackgroundFormat.forEach((field) => {
    initialErrors[field.id] = 'initialLoad'
  })
  const [errors, setErrors] = useState(initialErrors)
  const handleInputValidity = (fieldId, inputValue) => {
    const field = educationBackgroundFormat.find(
      (field) => field.id === fieldId
    )
    const errorText = field.validate(inputValue)
    setErrors({ ...errors, [fieldId]: errorText })
  }

  const getErrors = () => {
    let newErrors = {}
    educationBackgroundFormat.forEach((field) => {
      newErrors[field.id] = field.validate(inputValues[field.id])
    })
    return newErrors
  }

  // Tracks state of save/edit button
  const [isEditable, setIsEditable] = useState(true)
  const handleSaveButton = () => {
    // Update errors if there are any
    const errors = getErrors()
    setErrors(errors)

    // Check if all inputs are valid
    let newIsEditable = false
    for (let error in errors) {
      if (errors[error] !== '') {
        newIsEditable = true
        break
      }
    }
    setIsEditable(newIsEditable)
  }
  const handleEditButton = () => {
    setIsEditable(true)
  }

  return (
    <form
      className="flex w-full flex-col items-start gap-8 rounded-lg text-neutral-100"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <h2 className="self-stretch text-3xl font-light">{title}</h2>
      <div className="flex flex-col gap-5 self-stretch">
        {educationBackgroundFormat.map((field) => {
          if (field.id === 'graduationYear') {
            const graduationYear = field
            const gpa = educationBackgroundFormat.find(
              (field) => field.id === 'gpa'
            )
            return (
              <div
                key={'graduationYear + gpa'}
                className="flex flex-wrap gap-3"
              >
                <TextBox
                  fieldConfig={graduationYear}
                  key={graduationYear.id}
                  inputValue={inputValues[graduationYear.id]}
                  hanldeInputValue={hanldeInputValue}
                  errorText={errors[graduationYear.id]}
                  handleInputValidity={handleInputValidity}
                  disabled={!isEditable}
                />
                <TextBox
                  fieldConfig={gpa}
                  key={gpa.id}
                  inputValue={inputValues[gpa.id]}
                  hanldeInputValue={hanldeInputValue}
                  errorText={errors[gpa.id]}
                  handleInputValidity={handleInputValidity}
                  disabled={!isEditable}
                />
              </div>
            )
          }

          if (field.id === 'gpa') {
            return
          }

          return (
            <TextBox
              fieldConfig={field}
              key={field.id}
              inputValue={inputValues[field.id]}
              hanldeInputValue={hanldeInputValue}
              errorText={errors[field.id]}
              handleInputValidity={handleInputValidity}
              disabled={!isEditable}
            />
          )
        })}
      </div>
      <div className="my-2 flex gap-4">
        {isEditable ? (
          <PrimaryButton text="Save" onClick={handleSaveButton} />
        ) : (
          <PrimaryButton
            text="Edit"
            hoverBorderColor="hover:border-orange-400"
            hoverTextColor="hover:text-orange-400"
            onClick={handleEditButton}
          />
        )}
      </div>
    </form>
  )
}

export default EducationBackground
