// External dependencies
import * as React from "react";

// Interfaces
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => <button>{props.label}</button>;

export default Button;
