const validations = (() => {
  function getError(regex, testSubject, invalidText) {
    if (testSubject.trim().length === 0) {
      return 'Required'
    } else if (regex.test(testSubject)) {
      return ''
    } else {
      return invalidText
    }
  }

  function none() {
    return ''
  }

  function name(text) {
    if (text.trim().length) {
      return ''
    } else {
      return 'Required'
    }
  }

  function email(text) {
    const regex = new RegExp(/^\S+@\S+\.\S+$/)
    const errorText = getError(regex, text, 'Invalid Email Address')
    return errorText
  }

  function phone(num) {
    const regex = new RegExp(/^\d{9,15}$/)
    const errorText = getError(regex, num, 'Invalid Contact Number')
    return errorText
  }

  function url(link) {
    let givenURL
    try {
      givenURL = new URL(link)
    } catch (error) {
      return 'Invalid URL'
    }
    return ''
  }

  function year(num) {
    const regex = new RegExp(/^\d{4}$/)
    const errorText = getError(regex, num, 'Invalid Year')
    return errorText
  }

  function gpa(num) {
    const regex = new RegExp(/^((10(\.0{1,2})?)|([0-9](\.[0-9]{1,2})?))$/)
    const errorText = getError(regex, num, 'Invalid GPA Format')
    return errorText
  }

  return {
    name,
    email,
    phone,
    url,
    year,
    gpa,
    none
  }
})()

export default validations
