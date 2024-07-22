import TextBox from './userInputs/TextBox'
import PrimaryButton from './PrimaryButton'

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

function PersonalDetails({ title }) {
  return (
    <form className="flex w-full flex-col items-start gap-8 rounded-lg text-neutral-100">
      <h2 className="self-stretch text-3xl font-light">{title}</h2>
      <div className="flex flex-col gap-6 self-stretch">
        <TextBox
          title="Full Name"
          required={true}
          type="text"
          validate={validations.name}
        />
        <TextBox
          title="Email Address"
          required={true}
          type="mail"
          validate={validations.email}
        />
        <TextBox
          title="Contact Number"
          required={true}
          type="tel"
          validate={validations.phone}
        />
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
