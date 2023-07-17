---
to: <%= absPath %>/<%= h.capitalize(component_name) %>.tsx
---
// External dependencies
import React from 'react'

// Interfaces
import { <%= h.capitalize(component_name) %>Props } from "./<%= h.capitalize(component_name) %>.types"

// Styles
import styles from "./<%= h.capitalize(component_name) %>.module.scss"

const <%= h.capitalize(component_name) %>: React.FC<<%= h.capitalize(component_name) %>Props> = ({ label }) => {
  return (
    <div data-testid="test" className={styles['label--container']}>
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default <%= h.capitalize(component_name) %>
