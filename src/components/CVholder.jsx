import { Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'

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
  workExperience: [
    {
      companyName: 'Fruit Basket',
      workedFrom: '01/01/2028',
      workedTill: '05/08/2030',
      jobTitle: 'Web Developer',
      responsibilties: [
        {
          id: uuidv4(),
          responsibility:
            'Core responsibility #1 / key results / high level summary.',
        },
        {
          id: uuidv4(),
          responsibility:
            'Core responsibility #2. As your most recent past experience, you can build out a few bullet points here.',
        },
        {
          id: uuidv4(),
          responsibility:
            "Core responsibility #3. Don't feel the need to write too much about jobs from over 5 years in the past.",
        },
      ],
    },
    {
      companyName: 'Google',
      workedFrom: '01/01/2031',
      workedTill: '05/08/2031',
      jobTitle: 'Web Developer',
      responsibilties: [
        {
          id: uuidv4(),
          responsibility:
            'Core responsibility #1 / key results / high level summary.',
        },
        {
          id: uuidv4(),
          responsibility:
            'Core responsibility #2. As your most recent past experience, you can build out a few bullet points here.',
        },
        {
          id: uuidv4(),
          responsibility:
            "Core responsibility #3. Don't feel the need to write too much about jobs from over 5 years in the past.",
        },
      ],
    },
  ],
  technicalSkills: [
    {
      id: uuidv4(),
      description: 'HTMl, CSS, Javascript, React, NodeJS, MongoDB, TailwindCSS',
    },
    { id: uuidv4(), description: 'C++, Python' },
    { id: uuidv4(), description: 'Git, Github' },
    { id: uuidv4(), description: 'OS and DBMS' },
  ],
}

function SectionHeader({ title }) {
  return (
    <h2 className="mb-2 mt-3 border-b-[1px] border-gray-400 text-base font-semibold">
      {title}
    </h2>
  )
}

function SectionContainer({ children }) {
  return (
    <section className="flex flex-col text-sm leading-tight">
      {children}
    </section>
  )
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
  const workExperience = sampleData.workExperience
  const technicalSkills = sampleData.technicalSkills

  return (
    <section className="flex aspect-[1/1.414] flex-col bg-white px-4 pt-4 font-serif text-black">
      {/* Personal Details  */}
      <section className="flex flex-col border-b-2 border-neutral-600 pb-1">
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
      <SectionContainer>
        <SectionHeader title="Education Background" />
        <p className="flex justify-between font-semibold">
          <div>{educationBackground.institution}</div>
          <div>{educationBackground.graduationYear}</div>
        </p>
        <p className="italic">
          {educationBackground.degree}, {educationBackground.specialization}
        </p>
        <ul className="list-inside list-disc text-xs leading-tight">
          <li>Passed out with {educationBackground.gpa} GPA</li>
          <li>{educationBackground.experience}</li>
        </ul>
      </SectionContainer>

      {/* Work Experience  */}
      <SectionContainer>
        <SectionHeader title="Work Experience" />
        <ol className="ml-4 list-outside list-decimal">
          {workExperience.map((job) => {
            return (
              <li key={job.companyName} className="mb-1">
                <p className="flex items-end justify-between font-semibold">
                  <div>{job.companyName}</div>
                  <div className="text-xs">
                    {job.workedFrom} - {job.workedTill}
                  </div>
                </p>
                <p className="italic">{job.jobTitle}</p>
                <ul className="list-inside list-disc text-xs leading-tight">
                  {job.responsibilties.map((item) => {
                    return <li key={item.id}>{item.responsibility}</li>
                  })}
                </ul>
              </li>
            )
          })}
        </ol>
      </SectionContainer>

      {/* Technical Skills  */}
      <SectionContainer>
        <SectionHeader title="Technical Skills" />
        <ul className="list-inside list-disc text-xs leading-tight">
          {technicalSkills.map((skill) => {
            return <li key={skill.id}>{skill.description}</li>
          })}
        </ul>
      </SectionContainer>
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
