function InputBox({ title, type, placeholderText }) {
  return (
    <input
      type={type}
      placeholder={title}
      className="border-b-2 border-neutral-600 bg-inherit"
    />
  )
}

export default InputBox
