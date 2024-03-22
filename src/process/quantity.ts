export const quantityLevel = (quantity: number) =>
  quantity <= 10 ? "level-low" : quantity <= 20 ? "level-medium" : "level-high";