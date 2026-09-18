# 📚 BookHand

> A student-focused online marketplace for buying and selling used university textbooks.

BookHand is a full-stack web application designed to help university students easily buy and sell their used textbooks.

Students can list books they no longer need, while other students can discover, search, save, and purchase books at affordable prices.

---

## ✨ Features

### 🔐 Authentication
- Email & password authentication
- Google authentication
- Secure session management with Better Auth
- Password reset via email
- Multi-session support
- Protected user-specific routes

### 📚 Books Marketplace
- Browse available books
- Search books by title and author
- Pagination
- Book details page
- Book condition and pricing
- Seller information
- Book categories and languages
- Cover image upload

### ❤️ Wishlist
- Save books for later
- View saved books
- Remove books from wishlist

### 👤 User Profiles
- Personal profile
- Public seller profiles
- View books listed by a seller
- Seller avatar and profile information

### 💰 Sell a Book
- Create a new book listing
- Upload book cover
- Set price
- Select book condition
- Add description
- Select category and language
- Delete your own listings

### 🎨 UI / UX
- Responsive design
- Mobile-friendly navigation
- Dark / Light theme
- shadcn/ui components
- Tailwind CSS
- Smooth animations
- Clean marketplace-focused interface

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion
- Next.js Image
- Better Auth

### Backend

- Node.js
- Express.js
- TypeScript
- REST API

### Database

- PostgreSQL
- Prisma ORM

### Authentication

- Better Auth
- Google OAuth
- Email & Password

### Other Tools

- ImgBB for image hosting
- Git & GitHub
- Postman for API testing

---

## 🏗️ Architecture

BookHand follows a separated frontend and backend architecture.

```text
┌──────────────────────┐
│      Next.js         │
│      Frontend        │
└──────────┬───────────┘
           │
           │ REST API
           ▼
┌──────────────────────┐
│      Express.js      │
│       Backend        │
└──────────┬───────────┘
           │
           │ Prisma
           ▼
┌──────────────────────┐
│      PostgreSQL      │
│       Database       │
└──────────────────────┘

Authentication is handled by Better Auth on the Next.js side, while protected backend requests are verified through internal server-to-server headers.

📁 Project Structure

# Frontend

book-hand/
├── src/
│   ├── app/
│   │   ├── books/
│   │   ├── profile/
│   │   ├── sell-book/
│   │   ├── wishlist/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── Auth/
│   │   ├── Navbar/
│   │   ├── Sidebar/
│   │   ├── Books/
│   │   ├── shared/
│   │   └── ui/
│   │
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── auth-client.ts
│   │   └── ...
│   │
│   └── actions/
│
├── public/
├── prisma/
├── package.json
└── README.md

# Backend

backend-book-hand/
├── src/
│   ├── Controllers/
│   ├── Services/
│   ├── Routes/
│   ├── Middleware/
│   ├── lib/
│   └── server.ts
│
├── prisma/
├── package.json
└── ...

🗄️ Database

The main database entities include:
User
 │
 ├── BookListing
 │       │
 │       └── Book
 │
 ├── Session
 │
 └── Account

 Main Models
User
Stores user account and profile information.
Book
Stores book information such as:
- Title
- Author
- Description
- Cover image
- Category
- Language
- Publication date
BookListing
Stores marketplace-specific information:
- Seller
- Book
- Price
- Condition
- Description
- Status
- Created date
- Updated date