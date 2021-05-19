export const getPrecision = (n: number): number => {
  // Delete the next line, implementation goes there

  const decimal = n.toString().split('.');

  const precisionNumber = decimal[1].length;

  console.log(precisionNumber);
  return precisionNumber;
};
