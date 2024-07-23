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
  let initialInputValues = {}
  personalDetailsData.forEach((field) => {
    initialInputValues[field.id] = ''
  })
  const [inputValues, setInputValues] = useState(initialInputValues)
  const hanldeInputValue = (fieldId, newInputValue) => {
    setInputValues({...inputValues, [fieldId]: newInputValue })
  }

  let errors = {}
  personalDetailsData.forEach((field) => {
    errors[field.id] = field.validate(inputValues[field.id])
  })

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
            />
          )
        })}
      </div>
      <div className="my-2 flex gap-4">
        <PrimaryButton
          text="Edit"
          hoverBorderColor="hover:border-orange-400"
          hoverTextColor="hover:text-orange-400"
        />
        <PrimaryButton text="Save" />
      </div>
    </form>
  )
}

export default PersonalDetails
