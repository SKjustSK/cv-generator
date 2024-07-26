import validations from './validations'

const educationBackgroundFormat = [
  {
    title: 'College / University / Instituion',
    id: 'institution',
    type: 'text',
    required: true,
    validate: validations.name,
  },
  {
    title: 'Degree',
    id: 'degree',
    type: 'text',
    required: true,
    validate: validations.name,
  },
  {
    title: 'Sepcialization / Branch',
    id: 'specialization',
    type: 'text',
    required: true,
    validate: validations.name,
  },
  {
    title: 'Graduation Year',
    id: 'graduationYear',
    type: 'text',
    required: true,
    validate: validations.year,
  },
  {
    title: 'GPA',
    id: 'gpa',
    type: 'text',
    required: true,
    validate: validations.gpa,
  },
  {
    title: 'Experience',
    id: 'experience',
    type: 'textbox',
    required: false,
    validate: validations.none,
  },
]

export default educationBackgroundFormat
