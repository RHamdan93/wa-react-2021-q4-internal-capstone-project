export const calculateShopcartTotal = (shopCartItems) => {
  return shopCartItems
    .map(({ product, quantity }) => product.data.price * quantity)
    .reduce((sum, current) => (sum += current), 0);
};
