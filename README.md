```md
# ⚡ Frontend Project (Vite + React) 🌍

## 🚀 Project Overview

This is a **frontend** project built with **Vite + React**, styled using **Tailwind CSS**, and enhanced with **SweetAlert2** and **React Toastify** for user-friendly notifications. The app interacts with a **Node.js/Express** backend.

## 📌 Features

✅ Lightning-fast builds with Vite ⚡  
✅ Tailwind CSS for seamless styling 🎨  
✅ React Router for smooth navigation 🔀  
✅ API Integration using Axios 🔗  
✅ SweetAlert2 for sleek modals 🛑  
✅ React Toastify for toast notifications 🍞

``` 

## 🛠️ Installation & Setup

### 🖥️ Clone the repository
Run the following commands in your terminal:

```sh
git clone https://github.com/Stephen-sudo/JS-CRUD.git
cd JS-CRUD
```

### 📦 Install dependencies
```sh
npm install
```

### 🎯 Start the development server
```sh
npm run dev
```

---

## 🔌 Backend API Integration

This project fetches data from an **Express.js** backend using **Axios**.

🔹 Example API call:
```js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
