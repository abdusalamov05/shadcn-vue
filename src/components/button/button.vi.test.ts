import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './button.vue'

test('should render default label "Button"', () => {
  const wrapper = mount(Button, {
    props: { label: 'Button' },
  })
  expect(wrapper.text()).toBe('Button')
})

test('should render custom label', () => {
  const customLabel = 'Подтвердить'
  const wrapper = mount(Button, { props: { label: customLabel } })
  expect(wrapper.text()).toBe(customLabel)
})

test('should use base class "button" and no extra variant/size classes when default', () => {
  const wrapper = mount(Button, {
    props: { label: 'Button' },
  })
  expect(wrapper.classes()).toEqual(['button'])
})

test('should apply outline variant class', () => {
  const wrapper = mount(Button, { props: { variant: 'outline', label: 'Button' } })
  expect(wrapper.classes()).toContain('button--outline')
})

test('should apply lg size class', () => {
  const wrapper = mount(Button, { props: { size: 'lg', label: 'Button' } })
  expect(wrapper.classes()).toContain('button--lg')
})
