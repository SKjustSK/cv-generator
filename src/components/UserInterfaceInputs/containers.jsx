function Form({ children }) {
  return (
    <form
      className="flex w-full flex-col items-start gap-8 rounded-lg text-neutral-100"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      {children}
    </form>
  )
}

function FormTitle({ children }) {
  return <h2 className="self-stretch text-3xl font-light mb-[-0.5rem]">{children}</h2>
}

function FormContent({ children }) {
  return <div className="flex flex-col gap-4 self-stretch">{children}</div>
}

function FormButton({ children }) {
  return <div className="">{children}</div>
}

export { Form, FormTitle, FormContent, FormButton }
