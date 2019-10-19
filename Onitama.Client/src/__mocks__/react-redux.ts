export const redux = jest.genMockFromModule("react-redux");

jest.mock("react-redux", () => ({
  useDispatch: () => {},
  useSelector: () => ({
    card: []
  })
}));
