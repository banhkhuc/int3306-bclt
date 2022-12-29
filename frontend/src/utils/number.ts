export const fullDigit = (number: number, digits: number) => {
  return '0'.repeat(digits - number.toString().length) + number;
};
