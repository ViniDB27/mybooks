import render from "react-test-renderer";

import { ListOfBooks } from "./index";

describe("<HeaderWithTextInput />", () => {
  const tree = render
    .create(<ListOfBooks listBooks={[]} onSlectedBook={() => {}} />)
    .toJSON();

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
