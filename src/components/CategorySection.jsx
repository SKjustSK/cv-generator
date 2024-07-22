import InputBox from './InputBox'

function CategorySection({ title, inputBoxes }) {
  return (
    <section className="flex flex-col gap-4 rounded-lg bg-[#262626] p-4 text-zinc-50 drop-shadow-3xl">
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
