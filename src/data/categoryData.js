const categoryData = [
  {
    title: 'Personal Details',
    id: 0,
    inputBoxes: [
      {
        title: 'Full Name',
        type: 'text',
      },
      {
        title: 'Email',
        type: 'mail',
      },
      {
        title: 'Contact Number',
        type: 'tel',
      },
    ],
  },
  {
    title: 'Educational Bacgkround',
    id: 1,
    inputBoxes: [
      {
        title: 'College / University / Institution / Organization',
        type: 'text',
      },
      {
        title: 'Degree / Course / Specialization',
        type: 'text',
      },
      {
        title: 'Graduation Year',
        type: 'number',
      },
      {
        title: 'GPA',
        type: 'number',
      }
    ],
  },
  {
    title: 'Work Experience',
    id: 2,
    inputBoxes: [
      {
        title: 'Title / Position',
        type: 'text',
      },
      {
        title: 'Company / Workplace',
        type: 'text',
      },
      {
        title: 'Job Responsibilities',
        type: 'text',
      },
    ],
  },
  {
    title: 'Technical Skills',
    id: 3,
    inputBoxes: [
      {
        title:'Tech Stack',
        type: 'text',
      }
    ]
  }
]

export default categoryData
