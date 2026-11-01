<template>
  <div class="search-input">
    <label :for="inputId">{{ label }}</label>
    <input
        :id="inputId"
        v-model="model"
        class="search-input__control"
        type="search"
        :placeholder="placeholder"
    >
  </div>
</template>

<script setup>
const model = defineModel({ type: String, default: '' })

defineProps({
  inputId: { type: String, required: true },
  label: { type: String, default: 'Поиск' },
  placeholder: { type: String, default: '' }
})
</script>

<style scoped>
.search-input { display: grid; gap: 6px; }
.search-input__control {
  width: 100%;
  padding: 10px 12px;
  font: inherit;
  border: 1px solid #9ca3af;
  border-radius: 8px;
}
</style>