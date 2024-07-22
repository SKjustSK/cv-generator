import InputBox from './InputBox'
import PrimaryButton from './PrimaryButton'

function CategorySection({ title, inputBoxes }) {
  return (
    <section className="flex w-full flex-col items-start gap-8 rounded-lg text-neutral-100">
      <h2 className="self-stretch text-3xl font-light">{title}</h2>
      <div className="flex flex-col gap-8 self-stretch">
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
      <div className="my-2 flex gap-4">
        <PrimaryButton
          text="Edit"
          hoverBorderColor="hover:border-orange-400"
          hoverTextColor="hover:text-orange-300"
        />
        <PrimaryButton text="Save" />
      </div>
    </section>
  )
}

export default CategorySection
