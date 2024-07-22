import categoryData from '../data/categoryData'
import Logo from './Logo'
import CategorySection from './CategorySection'

function UserInterface() {
  return (
    <section className="flex w-[40%] flex-col gap-8 p-24 py-8">
      <Logo />
      <div className="flex flex-col gap-16">
        {categoryData.map((category) => {
          return (
            <CategorySection
              key={category.id}
              title={category.title}
              inputBoxes={category.inputBoxes}
            />
          )
        })}
      </div>
    </section>
  )
}

export default UserInterface
