import { TextBox, PrimaryButton } from './inputComponents'
import { useState } from 'react'
import personalDetailsFormat from '../../data/personDetailsFormat'
import { Form, FormTitle, FormContent, FormButton } from './containers'

function PersonalDetails({ title }) {
  // Tracks user input in each TextBox
  let initialInputValues = {}
  personalDetailsFormat.forEach((field) => {
    initialInputValues[field.id] = ''
  })
  const [inputValues, setInputValues] = useState(initialInputValues)
  const hanldeInputValue = (fieldId, newInputValue) => {
    setInputValues({ ...inputValues, [fieldId]: newInputValue })
  }

  // Tracks errors for the inputs in each TextBox
  let initialErrors = {}
  personalDetailsFormat.forEach((field) => {
    initialErrors[field.id] = 'initialLoad'
  })
  const [errors, setErrors] = useState(initialErrors)
  const handleInputValidity = (fieldId, inputValue) => {
    const field = personalDetailsFormat.find((field) => field.id === fieldId)
    const errorText = field.validate(inputValue)
    setErrors({ ...errors, [fieldId]: errorText })
  }

  const getErrors = () => {
    let newErrors = {}
    personalDetailsFormat.forEach((field) => {
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
        {personalDetailsFormat.map((field) => {
          if (field.id === 'contactNumber') {
            const contactNumber = field
            const cityCountry = personalDetailsFormat.find(
              (field) => field.id === 'cityCountry'
            )
            return (
              <div
                key={'contactNumber + cityCountry'}
                className="flex flex-wrap gap-3"
              >
                <TextBox
                  fieldConfig={contactNumber}
                  key={contactNumber.id}
                  inputValue={inputValues[contactNumber.id]}
                  hanldeInputValue={hanldeInputValue}
                  errorText={errors[contactNumber.id]}
                  handleInputValidity={handleInputValidity}
                  disabled={!isEditable}
                />
                <TextBox
                  fieldConfig={cityCountry}
                  key={cityCountry.id}
                  inputValue={inputValues[cityCountry.id]}
                  hanldeInputValue={hanldeInputValue}
                  errorText={errors[cityCountry.id]}
                  handleInputValidity={handleInputValidity}
                  disabled={!isEditable}
                />
              </div>
            )
          }

          if (field.id === 'cityCountry') {
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

export default PersonalDetails
