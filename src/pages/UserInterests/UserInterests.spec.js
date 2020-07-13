import React from "react"
import userEvent from "@testing-library/user-event"
import { render, within, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import axiosMock from "axios"
import UserInterests from "./UserInterests.js"
import baseURL from "../../base"

jest.mock("axios")

test("loads and displays user interests form", () => {
  render(<UserInterests />)
  const teachingInterest = screen.getByTestId("teaching-interest")
  const addButton = screen.getByTestId("add-interest")
  const saveButton = screen.getByTestId("submit")

  expect(teachingInterest).toBeInTheDocument()
  expect(addButton).toBeInTheDocument()
  expect(saveButton).toBeInTheDocument()
})

test("adds new interest to interests list", () => {
  render(<UserInterests />)
  const teachingInterest = screen.getByTestId("teaching-interest")
  const addButton = screen.getByTestId("add-interest")
  const interestList = screen.getByTestId("interest-list")

  userEvent.type(teachingInterest, "TDD")
  userEvent.click(addButton)

  expect(within(interestList).getByText("TDD")).toBeInTheDocument()
  expect(teachingInterest).toHaveValue("")
})

test("submits interests list", () => {
  render(<UserInterests />)
  const teachingInterest = screen.getByTestId("teaching-interest")
  const addButton = screen.getByTestId("add-interest")
  const submitButton = screen.getByTestId("submit")

  localStorage.setItem("user-email", "agatha@cultivatr.com")
  const mockedURL = `${baseURL}/user-interests`
  const expectedInterestList = ["TDD"]
  const mockedInterestList = {
    interestList: expectedInterestList,
  }
  const mockedHeaders = {
    headers: {
      "x-user-email": localStorage.getItem("user-email"),
    },
  }

  userEvent.type(teachingInterest, "TDD")
  userEvent.click(addButton)
  userEvent.click(submitButton)

  expect(axiosMock.post).toHaveBeenCalledWith(
    mockedURL,
    mockedInterestList,
    mockedHeaders
  )
})
