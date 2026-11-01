<template>
  <form class="catalog-controls" @submit.prevent>
    <SearchInput
        v-model="searchModel"
        input-id="catalog-search"
        label="Поиск товара"
        placeholder="Введите название товара"
    />
    <div class="catalog-controls__group">
      <label for="category-filter">Категория</label>
      <select id="category-filter" v-model="categoryModel" class="catalog-controls__select">
        <option value="all">Все категории</option>
        <option value="kitchen">Кухня</option>
        <option value="home">Дом</option>
        <option value="electronics">Электроника</option>
      </select>
    </div>
    <div class="catalog-controls__group">
      <label for="sort-select">Сортировка</label>
      <select id="sort-select" v-model="sortModel" class="catalog-controls__select">
        <option value="default">По умолчанию</option>
        <option value="price-asc">Сначала дешевле</option>
        <option value="price-desc">Сначала дороже</option>
        <option value="title-asc">По названию А-Я</option>
      </select>
    </div>
  </form>
</template>

<script setup>
import SearchInput from './SearchInput.vue'

const searchModel = defineModel('search', { type: String, default: '' })
const categoryModel = defineModel('category', { type: String, default: 'all' })
const sortModel = defineModel('sort', { type: String, default: 'default' })
</script>

<style scoped>
.catalog-controls { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; padding: 16px; background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 12px; }
.catalog-controls__group { display: grid; gap: 6px; }
.catalog-controls__select { width: 100%; padding: 10px 12px; font: inherit; border: 1px solid #9ca3af; border-radius: 8px; }
@media (max-width: 768px) { .catalog-controls { grid-template-columns: 1fr; } }
</style>