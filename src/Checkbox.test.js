import React from "react";
import { fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";
import { render } from "@testing-library/react";

test("checkbox selection", () => {
  const { getByLabelText } = render(<Checkbox />);
  const checkbox = getByLabelText(/not checked/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
