// External dependencies
import React from "react"
import { render, screen } from "@testing-library/react"

// Local components
import Button from "./Button"

describe("Button", () => {
	test("renders component successfully", () => {
		render(<Button label="test" />)

		const element = screen.getByText(/test/i)
		expect(element).toBeInTheDocument()
	})
})
