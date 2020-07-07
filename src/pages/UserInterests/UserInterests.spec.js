import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserInterests from "./UserInterests.js";

jest.mock("axios");

test("loads and displays user interests form", () => {
  const { getByTestId } = render(<UserInterests />);
  // const learningGoals = getByTestId("learningGoals");
  const teachingGoals = getByTestId("teaching-interest");
  const addButton = getByTestId("add-interest");
  const saveButton = getByTestId("submit");

  // expect(learningGoals).toBeInTheDocument();
  expect(teachingGoals).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
  expect(saveButton).toBeInTheDocument();
});

