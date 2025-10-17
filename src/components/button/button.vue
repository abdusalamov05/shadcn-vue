<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link'
    size?: 'default' | 'sm' | 'lg'
    label: string
  }>(),
  {
    variant: 'default',
    size: 'default',
  },
)
</script>

<template>
  <button
    :class="[
      'button',
      { [`button--${variant}`]: variant !== 'default' },
      { [`button--${size}`]: size !== 'default' },
    ]"
  >
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.button {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.714;
  border-radius: 6px;
  border: 1px solid transparent;
  color: #fff;
  background-color: #0f172a;
  &:hover {
    background-color: #334155;
  }
  padding: 8px 16px;

  &--outline {
    color: #0f172a;
    background-color: transparent;
    border: 1px solid #e2e8f0;

    &:hover {
      background-color: #f1f5f9;
    }
  }

  &--secondary {
    color: #0f172a;
    background-color: #f4f4f5;

    &:hover {
      background-color: #f4f4f5cc;
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

  &--link {
    color: #0f172a;
    background-color: transparent;

    &:hover {
      text-decoration: underline;
      background-color: transparent;
    }
  }

  &--sm {
    padding: 8px 12px;
  }

  &--lg {
    padding: 8px 24px;
  }
}
</style>
