<template>
  <main class="app-main">
    <section class="product-page">
      <RouterLink class="back-link" to="/catalog">← Назад в каталог</RouterLink>
      <article v-if="product" class="product-details">
        <img v-if="product.image" class="product-details__image" :src="product.image" :alt="product.title">
        <div class="product-details__content">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <p><strong>Категория:</strong> {{ getCategoryTitle(product.category) }}</p>
          <p><strong>Цена:</strong> {{ formatPrice(product.price) }}</p>
          <p><strong>Рейтинг:</strong> {{ product.rating }}</p>
          <p><strong>Статус:</strong> {{ product.isAvailable ? 'В наличии' : 'Нет в наличии' }}</p>
          <RouterLink class="button-link" to="/order">Оставить заявку</RouterLink>
        </div>
      </article>
      <div v-else class="product-not-found">
        <h2>Товар не найден</h2>
        <p>Проверьте адрес страницы или вернитесь в каталог.</p>
        <RouterLink class="button-link" to="/catalog">Вернуться в каталог</RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products.js'

const route = useRoute()
const product = computed(() => {
  const productId = Number(route.params.productId)
  return products.find((item) => item.id === productId) || null
})

function formatPrice(price) {
  return `${price.toLocaleString('ru-RU')} руб.`
}
function getCategoryTitle(category) {
  const categoryMap = { kitchen: 'Кухня', home: 'Дом', electronics: 'Электроника' }
  return categoryMap[category] || category
}
</script>

<style scoped>
.app-main { width: min(100% - 32px, 1100px); margin-inline: auto; padding-block: 32px; }
.product-page { display: grid; gap: 20px; }
.back-link, .button-link { display: inline-flex; width: fit-content; text-decoration: none; }
.back-link { color: #2563eb; }
.button-link { padding: 10px 14px; color: #ffffff; background-color: #2563eb; border-radius: 8px; }
.product-details { display: grid; grid-template-columns: minmax(240px, 420px) 1fr; gap: 24px; padding: 20px; background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 12px; }
.product-details__image { width: 100%; border-radius: 8px; object-fit: cover; }
.product-details__content { display: grid; align-content: start; gap: 12px; }
.product-details__content h2, .product-details__content p { margin: 0; }
.product-not-found { display: grid; gap: 12px; padding: 20px; background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 12px; }
.product-not-found h2, .product-not-found p { margin: 0; }
@media (max-width: 768px) { .product-details { grid-template-columns: 1fr; } }
</style>