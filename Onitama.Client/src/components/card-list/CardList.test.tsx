import * as React from "react";
import { mount, shallow } from "enzyme";
import { CardList } from "./CardList";
import { Cards } from "../../constants/Card";
import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import { useDispatch } from "react-redux";
import { selectCard } from "../../store/card/actions";
const mockStore = configureMockStore();

describe("<CardList />", () => {
  let store: MockStoreEnhanced<unknown, {}>;
  beforeEach(() => {
    store = mockStore({ card: [] });
  });

  it("renders", () => {
    store.dispatch(selectCard(1));
    mount(<CardList />);
  });

  it("should make card active when clicked", () => {
    const wrapper = shallow(<CardList />);
  });
});
