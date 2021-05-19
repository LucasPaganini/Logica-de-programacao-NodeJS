export const autoDistribute = (
  total: number,
  parts: number,
  decimalPrecision: number
): Array<number> => {
  // Delete the next line, implementation goes there

  const n = total;
  const divided = parts;
  const precision = decimalPrecision;

  const calc = (n / divided);

  console.log(calc);
  return [calc];
};
