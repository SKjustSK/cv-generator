import categoryData from '../data/categoryData'
import Logo from './Logo'
import CategorySection from './CategorySection'

function UserInterface() {
  return (
    <section className="flex w-[40%] flex-col px-12 py-6">
      <Logo />
      {categoryData.map((category) => {
        return (
          <CategorySection
            key={category.id}
            title={category.title}
            inputBoxes={category.inputBoxes}
          />
        )
      })}
    </section>
  )
}

export default UserInterface
