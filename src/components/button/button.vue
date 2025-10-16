<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link'
    label: string
  }>(),
  {
    variant: 'default',
    label: 'Button',
  },
)
</script>

<template>
  <button :class="['button', `button--${variant}`]">
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.button {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.714;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: all 0.2s ease;

  &--default {
    color: #fff;
    background-color: #0f172a;

    &:hover {
      background-color: #334155;
    }
  }

  &--outline {
    color: #0f172a;
    background-color: transparent;
    border: 1px solid #e2e8f0;

    &:hover {
      background-color: #f1f5f9;
    }
  }

  &--ghost {
    color: #0f172a;
    background-color: transparent;

    &:hover {
      background-color: #f1f5f9;
    }
  }

  &--destructive {
    color: #fff;
    background-color: #ef4444;

    &:hover {
      background-color: #dc2626;
    }
  }
}
</style>
