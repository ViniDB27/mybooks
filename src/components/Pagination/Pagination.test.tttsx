import render from "react-test-renderer";

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
    .toJSON();

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
