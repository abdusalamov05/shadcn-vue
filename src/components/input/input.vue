<script setup lang="ts">
withDefaults(
  defineProps<{
    placeholder?: string
  }>(),
  {
    placeholder: 'Email',
  },
)
</script>

<template>
  <input class="input" type="email" :placeholder="placeholder" />
</template>

<style scoped>
.input {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  padding: 8px 12px;
}
</style>
