import React from "react"
import { render, fireEvent, within } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import UserInterests from "./UserInterests.js"

jest.mock("axios")

test("loads and displays user interests form", () => {
  const { getByTestId } = render(<UserInterests />)
  // const learningGoals = getByTestId("learningGoals")
  const teachingInterest = getByTestId("teaching-interest")
  const addButton = getByTestId("add-interest")
  const saveButton = getByTestId("submit")

  // expect(learningGoals).toBeInTheDocument();
  expect(teachingInterest).toBeInTheDocument()
  expect(addButton).toBeInTheDocument()
  expect(saveButton).toBeInTheDocument()
})

test("adds new interest to interests list", () =>{
  const {getByTestId} = render(<UserInterests/>)
  const addButton = getByTestId("add-interest")
  const teachingInterest = getByTestId("teaching-interest")
  const interestList = getByTestId("interest-list")
  
  fireEvent.change(teachingInterest, { target: { value: "TDD"} })
  fireEvent.click(addButton)

  expect(within(interestList).getByText("TDD")).toBeInTheDocument()
  expect(teachingInterest).toHaveValue("")
  
})

