import { CurrencyCodeEnum } from "../type/types";

export type CurrencyCodeData = {
  currencyCode?: CurrencyCodeEnum;
  price?: string;
};

const currencySymbols = {
  [CurrencyCodeEnum.USD]: "$",
  [CurrencyCodeEnum.EUR]: "€",
};

export const Currency = ({
  currencyCode,
  price,
}: CurrencyCodeData) => {
  const symbol = currencyCode ? (currencySymbols[currencyCode] || currencyCode) : '';

  return `${symbol} ${price}`;
};