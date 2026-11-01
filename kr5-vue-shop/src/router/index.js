import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CatalogPage from '../views/CatalogPage.vue'
import ProductPage from '../views/ProductPage.vue'
import OrderPage from '../views/OrderPage.vue'
import CartPage from '../views/CartPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/catalog', name: 'catalog', component: CatalogPage },
    { path: '/catalog/:productId', name: 'product', component: ProductPage },
    { path: '/order', name: 'order', component: OrderPage },
    { path: '/cart', name: 'cart', component: CartPage },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router