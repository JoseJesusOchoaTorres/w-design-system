// External dependencies
import React from 'react'

// Interfaces
import { TextInputProps } from "./TextInput.types"

// Styles
import styles from "./TextInput.module.scss"

const TextInput: React.FC<TextInputProps> = ({ label }) => {
  return (
    <div data-testid="test" className={styles['label--container']}>
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default TextInput
