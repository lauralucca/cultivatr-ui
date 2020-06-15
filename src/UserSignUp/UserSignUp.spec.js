import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import UserSignUp from "./UserSignUp.js";
import baseURL from "../base";

jest.mock("axios");

test("loads and displays user sign up form", () => {
  const form = render(<UserSignUp />);
  const name = form.getByTestId("name");
  const email = form.getByTestId("email");
  const submit = form.getByTestId("submit");

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(submit).toBeInTheDocument();
});

test("submits user name and email", async () => {
  const mockedUserInfo = {
    name: "Agatha Silva",
    email: "agatha@example.com",
  };
  const mockedURL = `${baseURL}/user`;

  const form = render(<UserSignUp />);
  const name = form.getByTestId("name");
  const email = form.getByTestId("email");
  const submit = form.getByTestId("submit");
  fireEvent.change(name, { target: { value: mockedUserInfo.name } });
  fireEvent.change(email, { target: { value: mockedUserInfo.email } });
  fireEvent.click(submit);

  expect(axiosMock.post).toHaveBeenCalledTimes(1);
  expect(axiosMock.post).toHaveBeenCalledWith(mockedURL, mockedUserInfo);
});
