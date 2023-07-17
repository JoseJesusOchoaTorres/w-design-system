// External dependencies
import React from 'react'
import type { Meta, StoryObj } from "@storybook/react"

// Local components
import TextInput from './TextInput'

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
}

export default meta;

type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  render: (args) => (
    <TextInput {...args} />
  ),
  args: {
    label: 'Super label'
  },
}