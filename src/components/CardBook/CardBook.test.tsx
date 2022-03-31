import render, { ReactTestRendererJSON } from "react-test-renderer";

import { CardBook } from "./index";

const bookMock = {
  kind: "Mock",
  id: "1",
  etag: "Mock",
  selfLink: "Mock",
  volumeInfo: {
    title: "Mock",
    authors: ["Mock"],
    publisher: "Mock",
    publishedDate: "Mock",
    description: "Mock",
    pageCount: 10,
    imageLinks: {
      smallThumbnail: "Mock",
      thumbnail: "Mock",
    },
    language: "Mock",
  },
};

describe("<CardBook />", () => {
  const tree = render
    .create(<CardBook book={bookMock} onSlectedBook={() => {}} />)
    .toJSON() as ReactTestRendererJSON;

  console.log(tree);

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
