// Application constants
export const APP_CONFIG = {
  name: 'AI Automation Studio',
  version: '1.0.0',
  description: 'Landing page for AI Automation Studio',
  author: 'Your Name',
} as const

// Device breakpoints
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const

// API endpoints
export const API_ENDPOINTS = {
  base: '/api',
  auth: '/api/auth',
  users: '/api/users',
  projects: '/api/projects',
} as const

// Local storage keys
export const STORAGE_KEYS = {
  auth_token: 'auth_token',
  user_preferences: 'user_preferences',
  theme: 'theme',
  language: 'language',
} as const

// Error messages
export const ERROR_MESSAGES = {
  network: 'Network error. Please check your connection.',
  unauthorized: 'You are not authorized to access this resource.',
  notFound: 'The requested resource was not found.',
  serverError: 'Server error. Please try again later.',
  validation: 'Please check your input and try again.',
} as const

// Success messages
export const SUCCESS_MESSAGES = {
  saved: 'Changes saved successfully!',
  deleted: 'Item deleted successfully!',
  updated: 'Item updated successfully!',
  created: 'Item created successfully!',
} as const

// Animation durations (in ms)
export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const

// Z-index values
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
} as const
