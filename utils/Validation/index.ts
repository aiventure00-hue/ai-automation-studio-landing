// Validation utilities

export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  email?: boolean
  url?: boolean
}

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export function validateEmail(email: string): ValidationResult {
  const errors: string[] = []
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!email) {
    errors.push('Email is required')
  } else if (!emailRegex.test(email)) {
    errors.push('Please enter a valid email address')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export function validatePassword(password: string): ValidationResult {
  const errors: string[] = []

  if (!password) {
    errors.push('Password is required')
  } else {
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long')
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter')
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter')
    }
    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number')
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export function validateRequired(value: string, fieldName: string): ValidationResult {
  const errors: string[] = []

  if (!value || value.trim() === '') {
    errors.push(`${fieldName} is required`)
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export function validateField(value: string, rules: ValidationRule, fieldName: string): ValidationResult {
  const errors: string[] = []

  if (rules.required && (!value || value.trim() === '')) {
    errors.push(`${fieldName} is required`)
  }

  if (value && rules.minLength && value.length < rules.minLength) {
    errors.push(`${fieldName} must be at least ${rules.minLength} characters long`)
  }

  if (value && rules.maxLength && value.length > rules.maxLength) {
    errors.push(`${fieldName} must not exceed ${rules.maxLength} characters`)
  }

  if (value && rules.pattern && !rules.pattern.test(value)) {
    errors.push(`${fieldName} format is invalid`)
  }

  if (value && rules.email) {
    const emailResult = validateEmail(value)
    if (!emailResult.isValid) {
      errors.push(...emailResult.errors)
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}
