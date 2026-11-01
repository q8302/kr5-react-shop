<template>
  <main class="app-main">
    <section class="order-page">
      <div class="order-page__header">
        <h2>Заявка на консультацию</h2>
        <p>Заполните форму. На следующем этапе эти данные можно будет отправлять в backend API.</p>
      </div>
      <form class="order-form" @submit.prevent="handleSubmit">
        <div class="form-field">
          <label for="order-name">Имя</label>
          <input id="order-name" v-model="formData.name" type="text" class="form-field__control" :class="{ 'form-field__control--error': submitted && errors.name }" placeholder="Введите имя">
          <p v-if="submitted && errors.name" class="form-field__error">{{ errors.name }}</p>
        </div>
        <div class="form-field">
          <label for="order-email">E-mail</label>
          <input id="order-email" v-model="formData.email" type="email" class="form-field__control" :class="{ 'form-field__control--error': submitted && errors.email }" placeholder="example@mail.ru">
          <p v-if="submitted && errors.email" class="form-field__error">{{ errors.email }}</p>
        </div>
        <div class="form-field">
          <label for="order-phone">Телефон</label>
          <input id="order-phone" v-model="formData.phone" type="tel" class="form-field__control" :class="{ 'form-field__control--error': submitted && errors.phone }" placeholder="+7 999 000-00-00">
          <p v-if="submitted && errors.phone" class="form-field__error">{{ errors.phone }}</p>
        </div>
        <div class="form-field">
          <label for="order-comment">Комментарий</label>
          <textarea id="order-comment" v-model="formData.comment" class="form-field__control" rows="4" placeholder="Кратко опишите задачу"></textarea>
        </div>
        <div class="order-form__actions">
          <button class="button" type="submit">Отправить заявку</button>
          <button class="button button--secondary" type="button" @click="resetForm">Очистить</button>
        </div>
        <p v-if="formMessage" class="form-message">{{ formMessage }}</p>
      </form>
    </section>
  </main>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const initialFormData = { name: '', email: '', phone: '', comment: '' }
const formData = reactive({ ...initialFormData })
const submitted = ref(false)
const formMessage = ref('')

const errors = computed(() => {
  const result = {}
  if (formData.name.trim().length < 2) result.name = 'Введите имя не короче 2 символов.'
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(formData.email.trim())) result.email = 'Введите корректный e-mail.'
  const phonePattern = /^[0-9+\-()\s]+$/
  if (formData.phone.trim().length < 6 || !phonePattern.test(formData.phone.trim())) result.phone = 'Введите корректный номер телефона.'
  return result
})

const isFormValid = computed(() => Object.keys(errors.value).length === 0)

function handleSubmit() {
  submitted.value = true
  if (!isFormValid.value) {
    formMessage.value = 'Проверьте поля формы.'
    return
  }
  console.table({ ...formData })
  formMessage.value = 'Заявка подготовлена. Данные выведены в консоль.'
  resetForm()
}

function resetForm() {
  Object.assign(formData, initialFormData)
  submitted.value = false
  formMessage.value = ''
}
</script>

<style scoped>
.app-main { width: min(100% - 32px, 1100px); margin-inline: auto; padding-block: 32px; }
.order-page { display: grid; gap: 24px; }
.order-page__header { display: grid; gap: 8px; }
.order-page__header h2, .order-page__header p { margin: 0; }
.order-form { display: grid; gap: 16px; padding: 20px; background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 12px; }
.form-field { display: grid; gap: 6px; }
.form-field__control { width: 100%; padding: 10px 12px; font: inherit; border: 1px solid #9ca3af; border-radius: 8px; }
.form-field__control--error { border-color: #b91c1c; }
.form-field__error { margin: 0; color: #b91c1c; font-size: 14px; }
.order-form__actions { display: flex; flex-wrap: wrap; gap: 12px; }
.button { padding: 10px 14px; font: inherit; color: #ffffff; background-color: #2563eb; border: none; border-radius: 8px; cursor: pointer; }
.button--secondary { color: #1f2937; background-color: #e5e7eb; }
.form-message { margin: 0; padding: 12px; background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; }
</style>