export const autoDistribute = (
  total: number,
  parts: number,
  decimalPrecision: number
): Array<number> => {
  // Delete the next line, implementation goes there

  //const n = total;
  //const divided = parts;
  //const precision = decimalPrecision;

  const calc = parseFloat((total / parts).toFixed(decimalPrecision));

  //calc.toFixed(precision);

  const numberDivided = new Array(parts).fill(calc);

  console.log(numberDivided);
  return numberDivided;
};
