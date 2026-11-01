<template>
  <main class="app-main">
    <div class="center-wrapper">
      <section class="home-page">
        <h2>Учебный интернет-магазин на Vue</h2>
        <p>Это альтернативная SPA-версия интернет-магазина, который ранее был реализован на HTML, CSS, JavaScript и React.</p>
        <div class="home-page__actions">
          <RouterLink class="button-link" to="/catalog">Перейти в каталог</RouterLink>
          <RouterLink class="button-link button-link--secondary" to="/order">Оставить заявку</RouterLink>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
/* Центрируем контент на весь экран */
.center-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px); /* Высота экрана минус шапка */
  width: 100%;
}

.app-main {
  width: 100%;
  padding-block: 32px;
}

.home-page {
  display: grid;
  gap: 20px;
  padding: 32px;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  max-width: 800px; /* Ограничиваем ширину, чтобы выглядело аккуратно */
  width: 100%;
  text-align: center; /* Центрируем текст внутри */
}

.home-page h2, .home-page p {
  margin: 0;
}

.home-page h2 {
  font-size: 32px;
  font-weight: 800;
}

.home-page p {
  font-size: 18px;
  color: #4b5563;
}

.home-page__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center; /* Центрируем кнопки */
  margin-top: 10px;
}

/* Стили для кнопок (как ты просила - розовые и крупные) */
.button-link {
  display: inline-flex;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  background-color: #fbcfe8;
  border: 2px solid #f472b6;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s;
}

.button-link:hover {
  background-color: #f9a8d4;
}

.button-link--secondary {
  background-color: #f3f4f6;
  border-color: #e5e7eb;
  color: #4b5563;
}

.button-link--secondary:hover {
  background-color: #e5e7eb;
}
</style>