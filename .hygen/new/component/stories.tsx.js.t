---
to: <%= absPath %>/<%= h.capitalize(h.capitalize(component_name)) %>.stories.tsx
---
// External dependencies
import React from 'react'
import type { Meta, StoryObj } from "@storybook/react"

// Local components
import <%= h.capitalize(component_name) %> from './<%= h.capitalize(component_name) %>'

const meta: Meta<typeof <%= h.capitalize(component_name) %>> = {
  title: 'Components/<%= h.capitalize(component_name) %>',
  component: <%= h.capitalize(component_name) %>,
}

export default meta;

type Story = StoryObj<typeof <%= h.capitalize(component_name) %>>

export const Default: Story = {
  render: (args) => (
    <<%= h.capitalize(component_name) %> {...args} />
  ),
  args: {
    label: 'Super label'
  },
}