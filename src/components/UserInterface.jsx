import Logo from './Logo'
import PersonalDetails from './UserInterfaceInputs/PersonalDetails'
import EducationBackground from './UserInterfaceInputs/EducationBackground'

function UserInterface() {
  return (
    <section className="flex w-[40%] flex-col gap-4 p-24 py-8">
      <Logo />
      <div className="flex flex-col gap-12">
        {/* TODO: Add Sections for User Details */}

        <PersonalDetails title="Personal Details" />
        <EducationBackground title="Education Background" />

      </div>
    </section>
  )
}

export default UserInterface
