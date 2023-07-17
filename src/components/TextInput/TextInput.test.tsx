// External dependencies
import React from "react"
import { render, screen } from "@testing-library/react"

// Local components
import TextInput from "./TextInput"

describe("TextInput", () => {
	test("renders component successfully", () => {
		render(<TextInput label="test" />)

		const element = screen.getByTestId(/test/i)
		expect(element).toBeInTheDocument()
	})
})
