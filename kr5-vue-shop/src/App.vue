<template>
  <div class="app">
    <header class="site-header">
      <div class="site-header__inner">
        <h1>Vue Shop</h1>
        <p>Учебный интернет-магазин на Vue 3 + Vite.</p>
      </div>
    </header>

    <main class="app-main">
      <section class="catalog-page">
        <div class="catalog-page__header">
          <h2>Каталог товаров</h2>
          <p>Найдено товаров: <strong>{{ visibleProducts.length }}</strong></p>
          <p>Добавлено товаров: <strong>{{ addedCount }}</strong></p>
        </div>

        <form class="catalog-controls" @submit.prevent>
          <div class="catalog-controls__group">
            <label for="catalog-search">Поиск товара</label>
            <input
                id="catalog-search"
                v-model="searchQuery"
                class="catalog-controls__input"
                type="search"
                placeholder="Введите название товара"
            >
          </div>

          <div class="catalog-controls__group">
            <label for="category-filter">Категория</label>
            <select id="category-filter" v-model="selectedCategory" class="catalog-controls__select">
              <option value="all">Все категории</option>
              <option value="kitchen">Кухня</option>
              <option value="home">Дом</option>
              <option value="electronics">Электроника</option>
            </select>
          </div>

          <div class="catalog-controls__group">
            <label for="sort-select">Сортировка</label>
            <select id="sort-select" v-model="sortType" class="catalog-controls__select">
              <option value="default">По умолчанию</option>
              <option value="price-asc">Сначала дешевле</option>
              <option value="price-desc">Сначала дороже</option>
              <option value="title-asc">По названию А-Я</option>
            </select>
          </div>
        </form>

        <div v-if="visibleProducts.length > 0" class="products-grid">
          <article
              v-for="product in visibleProducts"
              :key="product.id"
              class="product-card"
              :class="{ 'product-card--unavailable': !product.isAvailable }"
          >
            <div class="product-card__body">
              <h3 class="product-card__title">{{ product.title }}</h3>
              <p class="product-card__description">{{ product.description }}</p>
              <p class="product-card__price">{{ formatPrice(product.price) }}</p>
              <p class="product-card__meta">Категория: {{ getCategoryTitle(product.category) }}</p>
              <p class="product-card__meta">Рейтинг: {{ product.rating }}</p>
              <p class="product-card__status">{{ product.isAvailable ? 'В наличии' : 'Нет в наличии' }}</p>
              <button
                  class="product-card__button"
                  type="button"
                  :disabled="!product.isAvailable"
                  @click="handleAddToCart(product)"
              >
                {{ product.isAvailable ? 'Добавить' : 'Недоступно' }}
              </button>
            </div>
          </article>
        </div>
        <p v-else class="products-empty">По выбранным условиям товары не найдены.</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
// ВАЖНО: проверь, что путь именно такой. Точка, слэш, data, слэш, products.js
import { products } from './data/products.js'

const searchQuery = ref('')
const selectedCategory = ref('all')
const sortType = ref('default')
const addedCount = ref(0)

const visibleProducts = computed(() => {
  let result = [...products]

  const query = searchQuery.value.trim().toLowerCase()
  if (query) {
    result = result.filter((product) => product.title.toLowerCase().includes(query))
  }

  if (selectedCategory.value !== 'all') {
    result = result.filter((product) => product.category === selectedCategory.value)
  }

  if (sortType.value === 'price-asc') {
    result.sort((a, b) => a.price - b.price)
  }
  if (sortType.value === 'price-desc') {
    result.sort((a, b) => b.price - a.price)
  }
  if (sortType.value === 'title-asc') {
    result.sort((a, b) => a.title.localeCompare(b.title))
  }

  return result
})

function formatPrice(price) {
  return `${price.toLocaleString('ru-RU')} руб.`
}

function getCategoryTitle(category) {
  const categoryMap = { kitchen: 'Кухня', home: 'Дом', electronics: 'Электроника' }
  return categoryMap[category] || category
}

function handleAddToCart(product) {
  console.log(`Товар добавлен: ${product.title}`)
  addedCount.value += 1
}
</script>
<style scoped>
.app { min-height: 100vh; color: #1f2937; background-color: #f8fafc; }
.site-header { padding: 32px 16px; background-color: #fce7f3; color: #831843; }
.site-header__inner, .app-main { width: min(100% - 32px, 1100px); margin-inline: auto; }
.site-header h1 {
  margin: 0;
  font-size: 40px;
  font-weight: 800;
}

.site-header p {
  margin-top: 8px;
  color: #be185d;
  font-size: 20px;
  font-weight: 500;
}
.site-header {
  padding: 32px 16px;
  background-color: rgba(157, 23, 77, 0.85);
  backdrop-filter: blur(8px);
  color: #ffffff;
}
.site-header h1 { margin: 0; font-size: 40px; font-weight: 800; }
.site-header p { margin-top: 8px; color: #fbcfe8; font-size: 20px; font-weight: 500; }.app-main { padding-block: 32px; }
.catalog-page { display: grid; gap: 24px; }
.catalog-page__header { display: grid; gap: 8px; }
.catalog-page__header h2, .catalog-page__header p { margin: 0; }
.catalog-controls { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; padding: 16px; background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 12px; }
.catalog-controls__group { display: grid; gap: 6px; }
.catalog-controls__input, .catalog-controls__select { width: 100%; padding: 10px 12px; font: inherit; border: 1px solid #9ca3af; border-radius: 8px; }
.products-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
.product-card { display: flex; flex-direction: column; overflow: hidden; background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 12px; }
.product-card--unavailable { opacity: 0.75; }
.product-card__body { display: flex; flex-direction: column; gap: 8px; padding: 16px; }
.product-card__title { margin: 0; font-size: 20px; }
.product-card__description, .product-card__meta, .product-card__status { margin: 0; }
.product-card__price { margin: 0; font-weight: 700; }

/* Кнопка */
.product-card__button {
  margin-top: auto;
  padding: 12px 16px;
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  background-color: #fbcfe8;
  border: 2px solid #f472b6;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.product-card__button:hover:not(:disabled) {
  background-color: #f9a8d4;
}

.product-card__button:disabled {
  color: #9ca3af;
  background-color: #f3f4f6;
  border-color: #e5e7eb;
  cursor: not-allowed;
}

.products-empty { padding: 16px; background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 8px; }

@media (max-width: 768px) {
  .catalog-controls { grid-template-columns: 1fr; }
}
</style>