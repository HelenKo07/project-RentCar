# 🚗 RentalCar – фронтенд для сервісу оренди авто

[![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.x-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-yellow?logo=vite)](https://vitejs.dev/)
[![Redux](https://img.shields.io/badge/Redux--Toolkit-global--state-purple)](https://redux-toolkit.js.org/)
[![Deployment](https://img.shields.io/badge/Deploy-Live-green)](https://your-live-demo-link.com)

---

## 📸 Демо

[![Demo Screenshot](<./src/assets/Demo%20Screenshot(1).png>)]
[![Demo Screenshot](<./src/assets/Demo%20Screenshot(2).png>)]
[![Demo Screenshot](<./src/assets/Demo%20Screenshot(3).png>)]

---

---

## 📌 Мета проєкту

Розробити фронтенд-частину веб-додатку для компанії **RentalCar**, яка займається орендою автомобілів. Користувачі можуть переглядати авто, фільтрувати каталог, переглядати деталі авто та надсилати форму для бронювання.

---

## 🧩 Основний функціонал

- 🔎 Перегляд каталогу авто з серверною фільтрацією (бренд, ціна, пробіг)
- ⭐ Додавання авто до "Обраного" зі збереженням у `localStorage`
- 📄 Детальна сторінка автомобіля з інформацією та формою бронювання
- 🚀 Пагінація через кнопку "Load More"
- ✅ Маршрутизація:
  - `/` — Головна
  - `/catalog` — Каталог авто
  - `/catalog/:id` — Сторінка авто
- 📡 Робота з REST API (https://car-rental-api.goit.global/api-docs/)
- 📥 Валідація форми бронювання, повідомлення про успіх

---

## 🛠️ Технології

| Категорія     | Технологія                                     |
| ------------- | ---------------------------------------------- |
| Бандлер       | [Vite](https://vitejs.dev/)                    |
| Бібліотека    | [React](https://reactjs.org/)                  |
| Стан          | [Redux Toolkit](https://redux-toolkit.js.org/) |
| Маршрутизація | [React Router DOM](https://reactrouter.com/)   |
| HTTP-клієнт   | [Axios](https://axios-http.com/)               |
| Стилі         | CSS Modules                                    |
| Форми         | Formik + Yup                                   |
| Деплой        | Vercel                                         |

---

## 🔗 API

Документація до бекенду:  
👉 https://car-rental-api.goit.global/api-docs/

Приклади запитів:

```js
// отримати автомобілі
axios.get("/cars?page=1&limit=8");

// фільтрований запит
axios.get("/cars?brand=Tesla&price=70&minMileage=1000&maxMileage=50000");

// деталі автомобіля
axios.get("/cars/{id}");
```

👤 Автор
Олена Корма
Frontend Developer
🔗 GitHub
🔗 [LinkedIn] (linkedin.com/in/alena-korma-44306b323)
