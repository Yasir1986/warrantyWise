# WarrantyWise Storefront

A modern React storefront application built with **React + TypeScript + Vite + Tailwind CSS v4**.
This project demonstrates a clean, scalable frontend architecture with filtering, searching, and product listing features.

---

## 🚀 Tech Stack

* **React 19**
* **TypeScript**
* **Vite**
* **Tailwind CSS v4**
* **Lucide React (icons)**

---

## 📦 Features

* 🔍 Search products
* 🏷️ Filter by category
* ↕️ Sort products
* 🛍️ Product listing UI
* ⚡ Fast development with Vite
* 🎨 Utility-first styling with Tailwind CSS

---

## 📁 Project Structure

```
src/
│
├── components/        # Reusable UI components
│   ├── FilterBar/
│   ├── ProductList/
│   └── SearchBar/
│
├── data/              # Mock data
│   └── mockProduct.ts
│
├── hooks/             # Custom React hooks
│   └── useProduct.ts
│
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Tailwind styles
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Yasir1986/warrantyWise
cd warrantywise
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run the development server

```bash
npm run dev
```

---

### 4. Open in browser

Visit:

```
http://localhost:5173
```

---

## 🎨 Tailwind CSS Setup (v4)

This project uses Tailwind CSS v4 with Vite.

Key setup:

* Installed Tailwind:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

* Configured `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

* Added Tailwind import in `index.css`:

```css
@import "tailwindcss";
```

---

## 🧪 Build for Production

```bash
npm run build
```

---

## 🔍 Preview Production Build

```bash
npm run preview
```

---

## ❗ Troubleshooting

### Tailwind styles not working

* Ensure `@tailwindcss/vite` is installed
* Check `vite.config.ts` includes the Tailwind plugin
* Restart dev server after changes

---

### npm permission errors

Run:

```bash
sudo chown -R $(id -u):$(id -g) ~/.npm
```

---

### Module not found errors

Install missing packages:

```bash
npm install <package-name>
```

---

## 📌 Future Improvements

* Add backend/API integration
* Implement authentication
* Add cart & checkout flow
* Improve UI with component libraries
* Add testing (Jest / React Testing Library)

---

## 📄 License

This project is for demo/learing purposes.

---

## 👨‍💻 Author

Yasir

---
