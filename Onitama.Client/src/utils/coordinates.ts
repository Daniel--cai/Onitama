export const getIndex = (x: number, y: number) => {
  return y + x * 5;
};

export const getPosition = (index: number) => {
  const x = index % 5;
  const y = Math.floor(index / 5);
  return [x, y];
};
