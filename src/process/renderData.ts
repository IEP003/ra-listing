import { ItemType } from "../type/types";


export const renderData = (items: ItemType[] ) => {
  return items.map((item) => ({
    listing_id: item.listing_id, 
    url: item.url || '#',
    title: item.title || 'no have title',
    price: item.price || 'free',
    quantity: typeof item.quantity === 'string' ? parseFloat(item.quantity) : item.quantity,
    MainImage: item.MainImage
    ? item.MainImage
    : "123", 
    currency_code: item.currency_code || '-'
  }));
};