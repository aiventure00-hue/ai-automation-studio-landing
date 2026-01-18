export interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export interface HeaderProps {
  title?: string
  showNavigation?: boolean
  showUserMenu?: boolean
}

export interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  items: SidebarItem[]
}

export interface SidebarItem {
  id: string
  label: string
  icon?: React.ReactNode
  href?: string
  children?: SidebarItem[]
}

export interface FooterProps {
  showCopyright?: boolean
  showLinks?: boolean
  customContent?: React.ReactNode
}
