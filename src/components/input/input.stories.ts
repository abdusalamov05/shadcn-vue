import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Input from './input.vue'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Email',
  },
}
