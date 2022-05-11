import { render } from "@testing-library/react";
import App from "./App";

test("outputs the h1 tag", () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Welcome to react testing library/);
  expect(h1).toHaveTextContent("Welcome to react testing library");
});
