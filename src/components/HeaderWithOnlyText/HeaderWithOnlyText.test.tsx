import render, { ReactTestRendererJSON } from "react-test-renderer";

import { HeaderWithOnlyText } from "./index";

describe("<HeaderWithOnlyText />", () => {
  const tree = render.create(
    <HeaderWithOnlyText text="Mock" />
  ).toJSON() as ReactTestRendererJSON;
  
  it("verify if component is not null ", () => {
    expect(tree).not.toEqual(null);
  });

  it("verify if have 1 child", () => {
    expect(tree.children?.length).toEqual(1);
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
  
  it("verify if type is View", () => {
    expect(tree.type).toEqual("View");
  });
});
