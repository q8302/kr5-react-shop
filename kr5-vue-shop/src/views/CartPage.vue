<template>
  <main class="app-main">
    <section class="cart-page">
      <h2>Корзина</h2>
      <p>На данном этапе корзина является заготовкой. Полноценная корзина с сохранением в localStorage может быть реализована как самостоятельная доработка Vue-варианта КР №5.</p>
      <RouterLink class="button-link" to="/catalog">Вернуться в каталог</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.app-main { width: min(100% - 32px, 1100px); margin-inline: auto; padding-block: 32px; }
.cart-page { display: grid; gap: 16px; padding: 20px; background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 12px; }
.cart-page h2, .cart-page p { margin: 0; }
.button-link { display: inline-flex; width: fit-content; padding: 10px 14px; color: #ffffff; background-color: #2563eb; border-radius: 8px; text-decoration: none; }
</style>