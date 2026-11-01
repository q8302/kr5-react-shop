<template>
  <main class="app-main">
    <section class="not-found-page">
      <h2>Страница не найдена</h2>
      <p>Возможно, адрес был введён неправильно или такой страницы больше не существует.</p>
      <RouterLink class="button-link" to="/">Вернуться на главную</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.app-main { width: min(100% - 32px, 1100px); margin-inline: auto; padding-block: 32px; }
.not-found-page { display: grid; gap: 16px; padding: 20px; background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 12px; }
.not-found-page h2, .not-found-page p { margin: 0; }
.button-link { display: inline-flex; width: fit-content; padding: 10px 14px; color: #ffffff; background-color: #2563eb; border-radius: 8px; text-decoration: none; }
</style>