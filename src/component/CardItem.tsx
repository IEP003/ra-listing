import React from 'react'
import { ItemType } from '../type/types'
import { Currency } from '../process/currency'
import { quantityLevel } from '../process/quantity'


type Props = {
    item: ItemType[]
}

const CardItem = ({item} : Props) => {
    const { price, quantity, currency_code: currencyCode } = item;
  return (
    <>
        <div className='item'>
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} alt={item.title}/>
                </a>
            </div>
            <div className='item-details'>
                <p className='item-title'>{item.title}</p>
                <p className='item-price'>
                {Currency({ currencyCode, price })}
                </p>
                <p className={`item-quantity ${quantityLevel(item.quantity)}`}>{item.quantity} left</p>
            </div>
        </div>
    </>
  )
}

export default CardItem