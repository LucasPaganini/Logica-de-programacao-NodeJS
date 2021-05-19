export const roundWithPrecision = (
  value: number,
  decimalPrecision: number
): number => {
  // Delete the next line, implementation goes there
  const precision = decimalPrecision
  const decimal = value;
  const rounded = parseFloat(decimal.toFixed(precision))

  //console.log(rounded);
  return rounded;
};
