import Logo from './Logo'
import PersonalDetails from './PersonalDetails'

function UserInterface() {
  return (
    <section className="flex w-[40%] flex-col gap-8 p-24 py-8">
      <Logo />
      <div className="flex flex-col gap-16">
        {/* LESSON: Do not try to generalize a component too much. In this case I tried making a generalized component CategorySection which would take inputs on what 
        to display, howver the contents would be slightly complex therefore making it hell to generalize this */}
        {/* {categoryData.map((category) => {{categoryData.map((category) => {
          return (
            <CategorySection
              key={category.id}
              title={category.title}
              inputBoxes={category.inputBoxes}
            />
          )
        })}
          return (
            <CategorySection
              key={category.id}
              title={category.title}
              inputBoxes={category.inputBoxes}
            />
          )
        })} */}

        {/* TODO: Add Sections for User Details */}

        <PersonalDetails title="Personal Details" />
      </div>
    </section>
  )
}

export default UserInterface
