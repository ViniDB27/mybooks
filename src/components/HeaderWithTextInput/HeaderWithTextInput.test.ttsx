import render from "react-test-renderer";

import { HeaderWithTextInput } from "./index";

describe("<HeaderWithTextInput />", () => {
  const tree = render
    .create(<HeaderWithTextInput value="Mock" onChangeText={() => {}} />)
    .toJSON();

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
