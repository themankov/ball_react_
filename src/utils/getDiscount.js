export const getDiscount = (newVal, prevVal) => {
  return (100 * (1 - newVal / prevVal)).toFixed();
};
