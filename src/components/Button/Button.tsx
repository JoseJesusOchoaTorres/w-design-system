// External dependencies
import * as React from "react"

// Interfaces
import { ButtonProps } from "./Button.types"

// Styles
import "./Button.scss"

const Button = (props: ButtonProps) => (
	<button className="button">{props.label}</button>
)

export default Button
