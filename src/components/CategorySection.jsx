import InputBox from './InputBox'

function CategorySection({ title, inputBoxes }) {
  return (
    <section className="drop-shadow-3xl flex flex-col gap-4 rounded-lg border border-zinc-800 bg-[#161618] p-4 text-zinc-50">
      <div className="py-2 text-3xl font-medium">{title}</div>
      <div className="flex flex-col gap-4">
        {inputBoxes.map((inputBox) => {
          return (
            <InputBox
              key={inputBox.title}
              title={inputBox.title}
              type={inputBox.type}
            />
          )
        })}
      </div>
    </section>
  )
}

export default CategorySection
