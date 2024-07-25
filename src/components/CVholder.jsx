import { Fragment } from 'react'

const sampleData = {
  personalDetails: {
    fullName: 'John Doe',
    emailAddress: 'johndoe@gmail.com',
    contactNumber: '9876543210',
    cityCountry: 'New York, USA',
    portfolioLink: 'https://github.com/SKjustSK/cv-generator',
  },
  educationBackground: {
    institution: 'Indian Institute of Information Technology, Kota',
    graduationYear: '2027',
    degree: 'B.Tech',
    specialization: 'Electronics and Communication Engineering',
    gpa: '9',
    experience:
      'Any other fun respectable stuff like varsity sports, fraternity/sorority, study abroad, or other tidbits.',
  },
}

function CVPage() {
  const personalDetails = sampleData.personalDetails
  const contactInfo = []
  for (let info in personalDetails) {
    if (info === 'fullName' || info === 'portfolioLink') {
      continue
    }
    contactInfo.push([info, personalDetails[info]])
  }

  const educationBackground = sampleData.educationBackground

  return (
    <section className="flex aspect-[1/1.414] flex-col bg-white px-4 pt-4 font-serif text-black">
      {/* Personal Details  */}
      <section className="flex flex-col border-b-2 border-black pb-1">
        <h1 className="text-4xl font-bold">{personalDetails.fullName}</h1>
        <div className="flex flex-wrap items-center gap-2 gap-y-0">
          {contactInfo.map((contact) => {
            return (
              <Fragment key={contact[0]}>
                <p className="text-sm">{contact[1]}</p>
                <div className="h-1 w-1 rounded-full bg-black"></div>
              </Fragment>
            )
          })}
          <a
            target="_blank"
            className="hover;text-blue-800 text-sm text-blue-600 underline visited:text-purple-600"
            href={personalDetails.portfolioLink}
          >
            Portfolio
          </a>
        </div>
      </section>
      {/* Education Background  */}
      <section className="flex flex-col pb-1 text-sm">
        <h2 className="mb-2 mt-3 border-b-[1px] border-gray-400 text-base font-semibold">
          Education Background
        </h2>
        <p className="font-semibold leading-tight">
          {educationBackground.institution}
          <br />
          Graduated in {educationBackground.graduationYear}
        </p>
        <p className="italic">
          {educationBackground.degree}, {educationBackground.specialization}
        </p>
        <ul className="list-inside list-disc text-xs leading-tight">
          <li>Passed out with {educationBackground.gpa} GPA</li>
          <li>{educationBackground.experience}</li>
        </ul>
      </section>
    </section>
  )
}

function CVholder() {
  return (
    <section className="align-center fixed bottom-0 right-0 top-0 flex w-[60%] grow justify-center py-6">
      <CVPage />
    </section>
  )
}

export default CVholder
