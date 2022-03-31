import render, { ReactTestRendererJSON } from "react-test-renderer";

import { CardBook } from "./index";

import { bookMock } from "../../utils/mocks/bookMock"

describe("<CardBook />", () => {
  const tree = render
    .create(<CardBook book={bookMock} onSlectedBook={() => {}} />)
    .toJSON() as ReactTestRendererJSON;

  it("verify if component is not null ", () => {
    expect(tree).not.toEqual(null);
  });

  it("verify if have 1 child", () => {
    expect(tree.children?.length).toEqual(1);
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
  
  it("verify if onClick is Instance of Function", () => {
    expect(tree.props.onClick).toBeInstanceOf(Function);
  });
  
  it("verify if type is View", () => {
    expect(tree.type).toEqual("View");
  });
});
