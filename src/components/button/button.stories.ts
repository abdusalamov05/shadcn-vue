import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Button from './button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'],
    },
    size: { control: 'select', options: ['default', 'sm', 'lg'] },
  },
  args: { size: 'default' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    label: 'Destructive',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    label: 'Link',
  },
}
