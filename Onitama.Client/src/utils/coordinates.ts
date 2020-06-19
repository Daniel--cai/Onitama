export const getIndex = (x: number, y: number) => {
  if (x >= 0 && x < 5 && y >= 0 && y < 5) {
    return x + y * 5;
  }
  return -1;
};

export const getPosition = (index: number) => {
  const x = index % 5;
  const y = Math.floor(index / 5);
  return [x, y];
};

export const transposeOffset = (x: number, y: number) => {
  const ox = 2 - x;
  const oy = 2 - y;
  return [ox, oy];
};

export const isValidSquare = (x: number, y: number, card: number[]) => {
  const [tx, ty] = transposeOffset(x, y);
  if (tx > 0 && tx < 5 && ty > 0 && ty < 5) {
    return card[getIndex(tx, ty)] === 1;
  }
  return false;
};

export const getCardOffsets = (card: number[]): number[][] => {
  if (!card) return [];
  const offsets: number[][] = [];
  for (let i = 0; i < card.length; i++) {
    if (card[i] === 1) {
      const [x, y] = getPosition(i);
      offsets.push([x - 2, y - 2]);
    }
  }
  return offsets;
};

export const getCalculatedOffsets = (card: number[], x: number, y: number) => {
  return getCardOffsets(card).map((offset) => {
    return getIndex(x + offset[0], y + offset[1]);
  });
};
