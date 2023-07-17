---
to: <%= absPath %>/<%= h.capitalize(h.capitalize(component_name)) %>.test.tsx
---
// External dependencies
import React from 'react'
import { render, screen } from '@testing-library/react'

// Local components
import <%= h.capitalize(component_name) %> from './<%= h.capitalize(component_name) %>'

describe("<%= h.capitalize(component_name) %>", () => {
  test('renders component successfully', () => {
    render(<<%= h.capitalize(component_name) %> label="test" />)

    const element = screen.getByText(/test/i)
    expect(element).toBeInTheDocument()
  })
})
