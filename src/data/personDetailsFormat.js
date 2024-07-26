import validations from './validations'

const personalDetailsFormat = [
  {
    title: 'Full Name',
    id: 'fullName',
    type: 'text',
    required: true,
    validate: validations.name,
  },
  {
    title: 'Email Address',
    id: 'emailAddress',
    type: 'mail',
    required: true,
    validate: validations.email,
  },
  {
    title: 'Contact Number',
    id: 'contactNumber',
    type: 'tel',
    required: true,
    validate: validations.phone,
  },
  {
    title: 'City, Country',
    id: 'cityCountry',
    type: 'text',
    required: true,
    validate: validations.name,
  },
  {
    title: 'Portfolio / Github link',
    id: 'url',
    type: 'text',
    required: true,
    validate: validations.url,
  },
]

export default personalDetailsFormat
