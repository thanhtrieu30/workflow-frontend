export const mapOrder = (originalArray, orderArray, key) => {
  if (!originalArray || !orderArray || !key) return [];
  return orderArray.map((id) => originalArray.find((item) => item[key] === id));
};
