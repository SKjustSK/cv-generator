function TextBox({
  fieldId,
  title,
  type,
  required,
  inputValue,
  hanldeInputValue,
  errorText,
  handleInputValidity,
  disabled,
}) {
  let borderColor = ''
  if (errorText === 'initialLoad') {
    borderColor = 'border-neutral-700'
  } else if (errorText === '' && inputValue !== '') {
    borderColor = 'border-teal-300'
  } else if (errorText !== '') {
    borderColor = 'border-pink-500'
  }

  let textColor = 'text-neutral-100'
  if (disabled) {
    textColor = 'text-neutral-400'
    borderColor = 'border-emerald-600'
  }

  const handleChange = (e) => {
    const userInput = e.target.value
    hanldeInputValue(fieldId, userInput)
    handleInputValidity(fieldId, userInput)
  }

  return (
    <div className="flex flex-col gap-1 self-stretch">
      <input
        placeholder={title}
        type={type}
        required={required}
        value={inputValue}
        onChange={(e) => handleChange(e)}
        className={`border-b-2 ${borderColor} bg-inherit py-2 ${textColor} font-[400] placeholder-neutral-400 outline-none hover:border-teal-100 focus:border-teal-300`}
        disabled={disabled}
      />
      <div className="text-sm text-pink-500">
        {errorText === 'initialLoad' ? '' : errorText}
      </div>
    </div>
  )
}

export default TextBox
