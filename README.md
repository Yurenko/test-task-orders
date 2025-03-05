# 🛒 SPA Fake Store (Orders Management)

Цей проєкт є односторінковим застосунком (SPA) для керування замовленнями, який використовує **Fake Store API**.

## 🚀 Функціонал

- 📦 Отримання списку замовлень з API
- 🔍 Фільтрація за статусом (pending, paid, shipped)
- ✏️ Редагування статусу замовлення (PATCH)
- 🛍 Перегляд деталей замовлення (/orders/:id)
- ❌ Видалення товарів із замовлення
- ⚡ Кешування даних за допомогою React Query
- 🎨 Адаптивний UI з Material UI

---

## 🛠 Використані технології

- **React (Vite)**
- **TypeScript**
- **React Query**
- **React Router**
- **Material UI**
- **Zod / Yup (Валідація)**
- **GitHub Actions (CI/CD)**
- **Vercel / Netlify (Деплой - опціонально)**

---

## 📥 Встановлення

1. **Склонуйте репозиторій**  
   ```sh
   git clone https://github.com//spa-fake-store.git
   cd spa-fake-store
   ```

2. **Встановіть залежностій**  
   ```sh
   npm install 
   ```

2. **Запустіть локальний сервер**  
   ```sh
   npm run dev
   ```