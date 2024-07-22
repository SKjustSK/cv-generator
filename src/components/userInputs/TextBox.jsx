import { useState } from 'react'

function TextBox({ title, type, required, validate }) {
  const [inputValue, setInputValue] = useState('')
  const [errorText, setErrorText] = useState('')
  const [borderColor, setBorderColor] = useState('border-neutral-700')

  const handleChange = (e) => {
    const userInput = e.target.value
    const errorText = validate(userInput)
    setInputValue(userInput)
    setErrorText(errorText)
    if (errorText === '') {
      setBorderColor('border-teal-300')
    } else {
      setBorderColor('border-neutral-700')
    }
  }

  return (
    <div className="flex flex-col gap-1 self-stretch">
      <input
        placeholder={title}
        type={type}
        required={required}
        value={inputValue}
        onChange={(e) => handleChange(e)}
        className={`border-b-2 ${borderColor} bg-inherit py-2 font-[400] placeholder-neutral-400 outline-none hover:border-teal-100 focus:border-teal-300`}
      />
      <div className="text-sm text-pink-500">{errorText}</div>
    </div>
  )
}

export default TextBox
