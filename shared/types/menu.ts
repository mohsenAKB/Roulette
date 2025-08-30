export interface MenuItem {
  icon: string
  title: string
  link?: string // TODO: should use an enum or constant type
  items?: MenuItem[]
}