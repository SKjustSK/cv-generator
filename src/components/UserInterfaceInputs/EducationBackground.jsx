import { TextBox, PrimaryButton } from './inputComponents'
import { useState } from 'react'
import educationBackgroundFormat from '../../data/educationBackgroundFormat'
import { Form, FormTitle, FormContent, FormButton } from './containers'

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
    <Form>
      <FormTitle>{title}</FormTitle>
      <FormContent>
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
      </FormContent>
      <FormButton>
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
      </FormButton>
    </Form>
  )
}

export default EducationBackground
