import render from "react-test-renderer";

import { HeaderWithOnlyText } from "./index";

describe("<HeaderWithOnlyText />", () => {
  const tree = render.create(
    <HeaderWithOnlyText text="Mock" />
  ).toJSON();
  
  
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
