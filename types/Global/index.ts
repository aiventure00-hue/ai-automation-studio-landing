export interface DeviceType {
  isDesktop: boolean
  isTablet: boolean
  isMobile: boolean
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}
