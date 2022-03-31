import render, { ReactTestRendererJSON } from "react-test-renderer";

import { Pagination } from "./index";

describe("<Pagination />", () => {
  const tree = render
    .create(
      <Pagination
        itensCount={1}
        itensPerPage={1}
        page={1}
        indexCurrent={1}
        onChange={() => {}}
      />
    )
    .toJSON() as ReactTestRendererJSON;

  it("verify if component is not null ", () => {
    expect(tree).not.toEqual(null);
  });

  it("verify if have 3 children", () => {
    expect(tree.children?.length).toEqual(3);
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });

  it("verify if type is View", () => {
    expect(tree.type).toEqual("View");
  });
});
