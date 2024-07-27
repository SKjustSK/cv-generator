function TextBox({
  fieldConfig,
  inputValue,
  setInputValue,
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
    setInputValue(fieldConfig.id, userInput)
    handleInputValidity(fieldConfig.id, userInput)
  }

  return (
    <div className="flex grow flex-col gap-1 self-stretch">
      <input
        placeholder={fieldConfig.title}
        type={fieldConfig.type}
        required={fieldConfig.required}
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

function PrimaryButton({
  text = 'dummy',
  hoverBorderColor = 'hover:border-teal-400',
  hoverTextColor = 'hover:text-teal-400',
  onClick
}) {
  return (
    <button
      className={`rounded border-2 border-neutral-100 px-8 py-2 font-light ${hoverBorderColor} ${hoverTextColor}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}



export {TextBox, PrimaryButton}
