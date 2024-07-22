function InputBox({ title, type}) {
  return (
    <input
      type={type}
      placeholder={title}
      className="border-b-2 border-neutral-700 bg-inherit py-2 font-[400] placeholder-neutral-400 outline-none hover:border-teal-100 focus:border-teal-300"
    />
  )
}

export default InputBox
