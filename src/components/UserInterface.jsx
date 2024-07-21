import categoryData from '../data/categoryData'
import Logo from './Logo'
import CategorySection from './CategorySection'

function UserInterface() {
  return (
    <section className="flex w-[40%] flex-col px-12 py-6">
      <Logo />
      <div className="flex flex-col gap-6">
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
