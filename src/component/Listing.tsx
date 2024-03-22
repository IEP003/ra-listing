
import { useMemo } from 'react'
import { renderItem } from '../process/renderItem'
import { ItemType } from '../type/types'
import CardItem from './CardItem'


type Props = {
    data: ItemType[]
}

export const Listing = ({ data }: Props) => {
  const renderCard =  useMemo(() => renderItem(data), [data]);
 
  return (
    <div className="item-list">
      {renderCard.map((item) => (
        <CardItem key={item.listing_id} item={item} />
      ))}
    </div>
  )
}
