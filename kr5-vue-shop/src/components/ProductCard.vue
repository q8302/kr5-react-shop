<template>
  <article class="product-card" :class="{ 'product-card--unavailable': !product.isAvailable }">
    <img v-if="product.image" class="product-card__image" :src="product.image" :alt="product.title">
    <div class="product-card__body">
      <h3 class="product-card__title">
        <RouterLink :to="`/catalog/${product.id}`">{{ product.title }}</RouterLink>
      </h3>
      <p class="product-card__description">{{ product.description }}</p>
      <p class="product-card__price">{{ formatPrice(product.price) }}</p>
      <p class="product-card__meta">Категория: {{ getCategoryTitle(product.category) }}</p>
      <p class="product-card__meta">Рейтинг: {{ product.rating }}</p>
      <p class="product-card__status">{{ product.isAvailable ? 'В наличии' : 'Нет в наличии' }}</p>

      <div class="product-card__actions">
        <RouterLink class="product-card__link" :to="`/catalog/${product.id}`">Подробнее</RouterLink>

        <button v-if="!product.isAvailable" class="product-card__button" disabled>
          Недоступно
        </button>

        <!-- Счетчик, если товар в корзине -->
        <div v-else-if="cartQuantity > 0" class="counter">
          <button class="counter__btn" @click="$emit('update-quantity', cartQuantity - 1)">−</button>
          <span class="counter__value">{{ cartQuantity }}</span>
          <button class="counter__btn" @click="$emit('update-quantity', cartQuantity + 1)">+</button>
        </div>

        <!-- Кнопка Добавить, если товара нет -->
        <button v-else class="product-card__button" @click="$emit('add-to-cart', product)">
          Добавить
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true },
  cartQuantity: { type: Number, default: 0 }
})
defineEmits(['add-to-cart', 'update-quantity'])

function formatPrice(price) {
  return `${price.toLocaleString('ru-RU')} руб.`
}
function getCategoryTitle(category) {
  const categoryMap = { kitchen: 'Кухня', home: 'Дом', electronics: 'Электроника' }
  return categoryMap[category] || category
}
</script>

<style scoped>
.product-card { display: flex; flex-direction: column; overflow: hidden; background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 12px; }
.product-card--unavailable { opacity: 0.75; }
.product-card__image { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; background-color: #e5e7eb; }
.product-card__body { display: flex; flex-direction: column; gap: 8px; padding: 16px; }
.product-card__title { margin: 0; font-size: 20px; }
.product-card__title a { color: inherit; text-decoration: none; }
.product-card__title a:hover { text-decoration: underline; }
.product-card__description, .product-card__meta, .product-card__status { margin: 0; }
.product-card__price { margin: 0; font-weight: 700; }

.product-card__actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: auto; align-items: center; }
.product-card__link, .product-card__button { display: inline-flex; align-items: center; justify-content: center; padding: 10px 12px; font: inherit; border-radius: 8px; }
.product-card__link { color: #2563eb; border: 1px solid #2563eb; text-decoration: none; }
.product-card__button { color: #000; background-color: #fbcfe8; border: 2px solid #f472b6; cursor: pointer; font-weight: 700; }
.product-card__button:hover:not(:disabled) { background-color: #f9a8d4; }
.product-card__button:disabled { color: #9ca3af; background-color: #f3f4f6; border-color: #e5e7eb; cursor: not-allowed; }

/* Стили для счетчика */
.counter { display: flex; align-items: center; gap: 4px; border: 2px solid #f472b6; border-radius: 8px; padding: 2px; background-color: #fbcfe8; }
.counter__btn { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: none; border: none; font-size: 20px; font-weight: bold; color: #000; cursor: pointer; }
.counter__btn:hover { background-color: rgba(255, 255, 255, 0.3); border-radius: 4px; }
.counter__value { min-width: 24px; text-align: center; font-weight: 700; font-size: 18px; color: #000; }
</style>