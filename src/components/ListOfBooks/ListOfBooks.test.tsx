import render, { ReactTestRendererJSON } from "react-test-renderer";

import { ListOfBooks } from "./index";

import { bookMock } from "../../utils/mocks/bookMock";

describe("<HeaderWithTextInput />", () => {
  const tree = render
    .create(
      <ListOfBooks listBooks={[bookMock, bookMock]} onSlectedBook={() => {}} />
    )
    .toJSON() as ReactTestRendererJSON;

  it("verify if component is not null ", () => {
    expect(tree).not.toEqual(null);
  });

  it("verify if have 1 child", () => {
    expect(tree.children?.length).toEqual(1);
  });

  it("verify if child is a RCTScrollView", () => {
    const scrolView = (tree.children as any[])[0];
    expect(scrolView.type).toEqual("RCTScrollView");
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });

  it("verify if type is View", () => {
    expect(tree.type).toEqual("View");
  });
});
