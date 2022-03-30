import render from "react-test-renderer";

import { SessionInfoBookDetail } from "./index";

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

describe("<SessionInfoBookDetail />", () => {
  const tree = render
    .create(
      <SessionInfoBookDetail
        book={bookMock}
        favorite={false}
      />
    )
    .toJSON();

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
