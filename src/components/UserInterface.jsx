import Logo from './Logo'
import PersonalDetails from './UserInterfaceInputs/PersonalDetails'
import EducationBackground from './UserInterfaceInputs/EducationBackground'

function UserInterface({ inputValues, setInputValues }) {
  const sections = {}
  for (let section in inputValues) {
    sections[section] = {}
    sections[section]['inputValue'] = inputValues[section]
    sections[section]['key'] = section
    sections[section]['set'] = (sectionKey, newInputValue) => {
      setInputValues({ ...inputValues, [sectionKey]: newInputValue })
    }
  }

  return (
    <section className="flex w-[40%] flex-col gap-4 p-24 py-8">
      <Logo />
      <div className="flex flex-col gap-12">
        <PersonalDetails
          title="Personal Details"
          sectionKey={sections.personalDetails.key}
          inputValues={sections.personalDetails.inputValue}
          setInputValues={sections.personalDetails.set}
        />
        <EducationBackground
          title="Education Background"
          sectionKey={sections.educationBackground.key}
          inputValues={sections.educationBackground.inputValue}
          setInputValues={sections.educationBackground.set}
        />
      </div>
    </section>
  )
}

export default UserInterface
