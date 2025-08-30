import { MENU_ITEMS } from '@/shared/resources/menu'
import { FC, JSX, ReactNode } from 'react'
import MenuItem from './MenuIItem'

const Menu: FC = (): ReactNode => {

  const renderMenuItems = (): JSX.Element[] => {
    return MENU_ITEMS.map(item => <MenuItem key={item.title} {...item} />)
  }

  return (
    <ul className='flex gap-2'>
      {renderMenuItems()}
    </ul>
  )
}

export default Menu