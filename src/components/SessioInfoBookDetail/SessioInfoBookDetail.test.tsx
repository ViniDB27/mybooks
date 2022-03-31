import render, { ReactTestRendererJSON } from "react-test-renderer";

import { SessionInfoBookDetail } from "./index";

import { bookMock } from "../../utils/mocks/bookMock"

describe("<SessionInfoBookDetail />", () => {
  const tree = render
    .create(
      <SessionInfoBookDetail
        book={bookMock}
        favorite={false}
      />
    )
    .toJSON() as ReactTestRendererJSON;

    it("verify if component is not null ", () => {
      expect(tree).not.toEqual(null);
    });
  
    it("verify if have 2 children", () => {
      expect(tree.children?.length).toEqual(2);
    });
  
    it("renders correctly", () => {
      expect(tree).toMatchSnapshot();
    });
  
    it("verify if type is View", () => {
      expect(tree.type).toEqual("View");
    });
});
