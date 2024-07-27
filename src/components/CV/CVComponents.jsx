function SectionHeader({ title }) {
  return (
    <h2 className="mb-2 mt-3 border-b-[1px] border-gray-400 text-base font-semibold">
      {title}
    </h2>
  )
}

function SectionContainer({ children }) {
  return (
    <section className="flex flex-col text-sm leading-tight">
      {children}
    </section>
  )
}

export { SectionHeader, SectionContainer }
