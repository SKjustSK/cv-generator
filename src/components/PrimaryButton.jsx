function PrimaryButton({
  text = 'dummy',
  hoverBorderColor = 'hover:border-teal-400',
  hoverTextColor = 'hover:text-teal-400',
}) {
  return (
    <button
      className={`rounded border-2 border-neutral-100 px-8 py-2 font-light ${hoverBorderColor} ${hoverTextColor}`}
    >
      {text}
    </button>
  )
}

export default PrimaryButton
