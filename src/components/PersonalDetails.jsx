import TextBox from './userInputs/TextBox'
import PrimaryButton from './PrimaryButton'
import { useState } from 'react'

const validations = (() => {
  function name(text) {
    if (text.trim().length) {
      return ''
    } else {
      return 'Required'
    }
  }

  function email(text) {
    if (text.trim().length === 0) {
      return 'Required'
    } else if (/^\S+@\S+\.\S+$/.test(text)) {
      return ''
    } else {
      return 'Invalid Email Address'
    }
  }

  function phone(text) {
    const num = text.trim()
    if (num.length === 0) {
      return 'Required'
    } else if (num.length > 9 && num.length < 14) {
      return ''
    } else {
      return 'Invalid Phone Number'
    }
  }

  return {
    name,
    email,
    phone,
  }
})()

const personalDetailsData = [
  {
    title: 'Full Name',
    id: 'fullName',
    type: 'text',
    required: true,
    validate: validations.name,
  },
  {
    title: 'Email Address',
    id: 'emailAddress',
    type: 'mail',
    required: true,
    validate: validations.email,
  },
  {
    title: 'Contact Number',
    id: 'contactNumber',
    type: 'tel',
    required: true,
    validate: validations.phone,
  },
]

function PersonalDetails({ title }) {
  // Tracks user input in each TextBox
  let initialInputValues = {}
  personalDetailsData.forEach((field) => {
    initialInputValues[field.id] = ''
  })
  const [inputValues, setInputValues] = useState(initialInputValues)
  const hanldeInputValue = (fieldId, newInputValue) => {
    setInputValues({ ...inputValues, [fieldId]: newInputValue })
  }

  // Tracks errors for the inputs in each TextBox
  let initialErrors = {}
  personalDetailsData.forEach((field) => {
    initialErrors[field.id] = 'initialLoad'
  })
  const [errors, setErrors] = useState(initialErrors)
  const handleInputValidity = (fieldId, inputValue) => {
    const field = personalDetailsData.find((field) => field.id === fieldId)
    const errorText = field.validate(inputValue)
    setErrors({ ...errors, [fieldId]: errorText })
  }

  const getErrors = () => {
    let newErrors = {}
    personalDetailsData.forEach((field) => {
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
      <div className="flex flex-col gap-6 self-stretch">
        {personalDetailsData.map((field) => {
          return (
            <TextBox
              title={field.title}
              key={field.id}
              fieldId={field.id}
              type={field.type}
              required={field.required}
              validate={field.validate}
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

export default PersonalDetails
