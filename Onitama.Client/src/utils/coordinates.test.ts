import { getPosition, getIndex, getCardOffsets } from "./coordinates";
import { Tiger, Frog } from "../constants/Card";
describe("coordinates", () => {
  it("should getPosition(14) correctly", () => {
    const actual = getPosition(14);
    const expected = [4, 2];

    expect(expected[0]).toEqual(actual[0]);
    expect(expected[1]).toEqual(actual[1]);
  });

  it("should getIndex(1,2) correctly", () => {
    const actual = getIndex(1, 2);
    const expected = 11;
    expect(actual).toEqual(expected);
  });

  it("should getCardOffsets(Tiger) correctly", () => {
    const actual = getCardOffsets(Tiger);
    const expected = [[0, -2], [0, 1]];

    actual.forEach(x => expect(expected).toContainEqual(x));
    expected.forEach(x => expect(actual).toContainEqual(x));
    expect(expected.length).toEqual(actual.length);
  });
  it("should getCardOffsets(Frog) correctly", () => {
    const actual = getCardOffsets(Frog);
    const expected = [[-2, 0], [-1, -1], [1, 1]];
    actual.forEach(x => expect(expected).toContainEqual(x));
    expected.forEach(x => expect(actual).toContainEqual(x));
    expect(expected.length).toEqual(actual.length);
  });
});
