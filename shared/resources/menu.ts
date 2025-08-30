import { MenuItem } from "../types/menu";

export const MENU_ITEMS: MenuItem[] = [
  {
    icon: "/icons/merchant.svg",
    title: "Marketplace"
  },
  {
    icon: "/icons/game-small.svg",
    title: "Games",
    items: [
      {
        icon: "/icons/game-small.svg",
        title: "Games"
      },
      {
        icon: "/icons/game-small.svg",
        title: "Games"
      }
    ]
  },
  {
    icon: "/icons/cup.svg",
    title: "Tournaments"
  }
]