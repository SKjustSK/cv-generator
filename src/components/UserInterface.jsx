import Logo from './Logo'
import PersonalDetails from './UserInterfaceInputs/PersonalDetails'

function UserInterface() {
  return (
    <section className="flex w-[40%] flex-col gap-4 p-24 py-8">
      <Logo />
      <div className="flex flex-col gap-16">
        {/* TODO: Add Sections for User Details */}

        <PersonalDetails title="Personal Details" />


      </div>
    </section>
  )
}

export default UserInterface
