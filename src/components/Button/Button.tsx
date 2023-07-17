// External dependencies
import * as React from "react"

// Interfaces
import { ButtonProps } from "./Button.types"

// Styles
import styles from "./Button.module.scss"

const Button = (props: ButtonProps) => (
	<button className={styles.button}>{props.label}</button>
)

export default Button
