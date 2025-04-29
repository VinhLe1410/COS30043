// Regular expressions
export const REGEX = {
  letterOnly: /^[A-Za-z]*$/,
  username: /^[A-Za-z0-9]{3,}$/,
  password: /^(?=.*[$%^&*@])[A-Za-z\d$%^&*@]{8,}$/,
  postcode: /^[0-9]{4}$/,
  mobile: /^04[0-9]{8}$/
}

// Validation functions
export const validators = {
  isLetterOnly: (value: string): boolean => {
    return REGEX.letterOnly.test(value) && value.trim() !== ''
  },

  isUsernameValid: (value: string): boolean => {
    return REGEX.username.test(value) && value.trim() !== ''
  },

  isPasswordValid: (password: string): boolean => {
    return REGEX.password.test(password) &&
           password.trim() !== ''
  },

  isPasswordConfirmationValid: (password: string, confirmation: string): boolean => {
    return password === confirmation && confirmation.trim() !== ''
  },

  isEmailValid: (email: string): boolean => {
    return email.includes('@') && email.includes('.')
  },

  isPostcodeValid: (postcode: string): boolean => {
    return REGEX.postcode.test(postcode) && postcode.trim() !== ''
  },

  isMobileValid: (mobile: string): boolean => {
    return REGEX.mobile.test(mobile) && mobile.trim() !== ''
  },

  isOptionalTextValid: (value: string, maxLength: number): boolean => {
    return value.trim() === '' || value.length <= maxLength
  },

  isAgeValid: (birthDate: string): boolean => {
    if (!birthDate) return false;
    const bDate = new Date(birthDate);
    const today = new Date();
    const age = today.getFullYear() - bDate.getFullYear();
    const monthDiff = today.getMonth() - bDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < bDate.getDate())) {
      return age - 1 >= 16;
    }
    return age >= 16;
  },

  isJobCategoryValid: (jobCategory: string): boolean => {
    const validCategories = ['AI', 'DATA', 'WEB', 'MOBILE' ];
    return validCategories.includes(jobCategory);
  },

  areAllValid: (checks: { [key: string]: boolean }): boolean => {
    return Object.values(checks).every(value => value === true)
  }
}
