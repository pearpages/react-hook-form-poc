import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";

describe("Form", () => {
  it("Should display required", async () => {
    render(<Form />);
    const textarea = screen.getByLabelText("Opinion");
    userEvent.type(textarea, "a{backspace}");
    await screen.findByText("This is required");
  });
});
