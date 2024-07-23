import { useRef } from 'react'

function TextBox({
  fieldId,
  title,
  type,
  required,
  inputValue,
  hanldeInputValue,
  errorText,
}) {
  const isFirstRender = useRef(true)

  if (isFirstRender.current) {
    errorText = ''
    isFirstRender.current = false
  }

  let borderColor = ''
  if (inputValue === '' && errorText === '') {
    borderColor = 'border-neutral-700'
  } else if (errorText === '') {
    borderColor = 'border-teal-300'
  } else {
    borderColor = 'border-pink-400'
  }

  const handleChange = (e) => {
    const userInput = e.target.value
    hanldeInputValue(fieldId, userInput)
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
