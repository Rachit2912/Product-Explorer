# 🛒 Product Explorer — Next.js + Zustand + LocalStorage Cart

A mini e-commerce app built with **Next.js 14 (App Router)**, featuring:

✅ Product listing
✅ Product details
✅ Add to Cart (Optimistic UI)
✅ Remove item from cart
✅ Clear cart
✅ LocalStorage persistence
✅ Zustand store
✅ API routes for products
✅ Responsive UI with Tailwind CSS

---

## 🚀 Live Demo (Optional)
*https://product-explorer-wheat.vercel.app/*

---

## 📦 Features
### 🛍 Product Features

* List all products
* View individual product details
* Fully typed using TypeScript

### 🧺 Cart Features

* Add item to cart (qty increments automatically)
* Remove a single item
* Clear full cart
* Cart stored in LocalStorage using Zustand
* Cart survives page refresh
* Optimistic UI — instant updates

### 🧩 API Features

* `/api/products` → fetch all products
* `/api/products/[id]` → fetch product by ID
* Basic validation added with **Zod**

---

## 🛠 Tech Stack

| Category         | Tools                       |
| ---------------- | --------------------------- |
| Framework        | **Next.js 14 (App Router)** |
| State Management | **Zustand**                 |
| Styling          | **Tailwind CSS**            |
| Validation       | **Zod**                     |
| Language         | **TypeScript**              |
| Deployment       | Vercel (Recommended)        |

---

## 📁 Project Structure

```
product-explorer/
├── app/
│   ├── api/
│   │   └── products/
│   │       ├── route.ts
│   │       └── [id]/route.ts
│   ├── cart/page.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── AddToCartButton.tsx
│   │   ├── RemoveFromCartButton.tsx
│   │   ├── product-card.tsx
│   │   ├── product-skeleton.tsx
│   │   └── Navbar.tsx
├── store/
│   └── cart.ts
├── lib/
│   └── types.ts
│   └── api.ts
│   └── utils.ts
├── public/data/products.json
├── README.md
├── package.json
└── next.config.ts
```

---

## 🧠 Design Decisions

### 🟦 **Why Zustand?**

* Minimal boilerplate
* Very fast
* Built-in LocalStorage support
* Cleaner than Redux for this scale

### 🟦 **Why LocalStorage for Cart?**

* No backend required
* Cart persists across sessions
* Instant read/write

### 🟦 **Why Zod for Validation?**

* Ensures product format is consistent
* Prevents UI break due to malformed data

---

## 📜 API Validation

Schema lives in:
```
/lib/types.ts
```


---

## 🧪 How to Run Locally

### 1. Clone repo

```bash
git clone https://github.com/Rachit2912/Product-Explorer.git
cd Product-Explorer
```

### 2. Install dependencies
```bash
npm install
```

### 3. Build & Run dev server

```bash
npm run build 
npm run dev
```

App opens at:
```
http://localhost:3000
```

---

## ⚠️ Trade-offs / Future Work

### Completed:
✔ Add to cart
✔ Remove from cart
✔ Clear cart
✔ Search Bar
✔ Product detail page
✔ LocalStorage persistence
✔ Fully routed pages

### Optional Improvements:
🔹 Add filters (price, category)
🔹 Authentication
🔹 Actual backend (Prisma + PostgreSQL)
🔹 Wishlist
🔹 Real images and pricing

---
