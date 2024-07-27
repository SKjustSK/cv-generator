import validations from './validations'

const workExperienceFormat = [
  {
    title: 'Company / Organization',
    id: 'companyName',
    type: 'text',
    required: true,
    validate: validations.name,
  },
  {
    title: 'Worked From',
    id: 'workedFrom',
    type: 'date',
    required: true,
    validate: validations.name,
  },
  {
    title: 'Worked Till',
    id: 'workedTill',
    type: 'date',
    required: true,
    validate: validations.name,
  },
  {
    title: 'Job Title(s)',
    id: 'jobTitle',
    type: 'text',
    required: true,
    validate: validations.name,
  },
]

export default workExperienceFormat
