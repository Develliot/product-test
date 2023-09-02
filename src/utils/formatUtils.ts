// TDOO: add tests

export const formatMoney = (value: number): string => {
  const parsed = Number.parseFloat(
    (Math.round(value * 100) / 100).toString()
  ).toFixed(2);
  if (Number.isNaN(parseFloat(parsed)) || Number.isNaN(value)) {
    return "0";
  }
  return parsed;
};
