# 📚 BookHand

A student-focused online marketplace for buying and selling used university textbooks.

BookHand is a full-stack web application designed to help university students easily buy and sell their used textbooks.

Students can list books they no longer need, while other students can discover, search, save, and purchase books at affordable prices.


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

- ImgBB
- Git
- GitHub
- Postman


## 🏗️ Architecture

BookHand follows a separated frontend and backend architecture.

Next.js Frontend
        ↓
      REST API
        ↓
Express.js Backend
        ↓
      Prisma
        ↓
   PostgreSQL

Authentication is handled by Better Auth on the Next.js side, while protected backend requests are verified through internal server-to-server headers.


## 📁 Project Structure

### Frontend

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


### Backend

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


## 🚀 Setup

### Prerequisites

Make sure you have the following installed:

- Node.js 20+
- npm
- PostgreSQL
- Git


### 1. Clone the Repository

git clone https://github.com/tfshorifulislam/book-hand.git
cd book-hand


### 2. Install Frontend Dependencies

npm install


### 3. Configure Environment Variables

Create a .env.local file in the frontend project root:

DATABASE_URL=

BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

NEXT_PUBLIC_FRONTEND_URL=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GMAIL_USER=
GMAIL_APP_PASSWORD=

NEXT_PUBLIC_IMGBB_API_KEY=

BACKEND_URL=
INTERNAL_SECRET=

Add your actual environment values.

Never commit .env or .env.local files to GitHub.


### 4. Setup Database

Make sure PostgreSQL is running and your DATABASE_URL is configured correctly.

Run Prisma migrations:

npx prisma migrate dev

Generate Prisma Client:

npx prisma generate


### 5. Start the Frontend

npm run dev

Frontend:

http://localhost:3000


### 6. Setup Backend

Open a new terminal:

cd ../backend-book-hand

Install backend dependencies:

npm install

Configure the backend environment variables.

Then start the backend:

npm run dev


### 7. Run the Application

Make sure both the frontend and backend servers are running.

Then open:

http://localhost:3000

You are now ready to use BookHand.


## 🗄️ Database

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


### User

Stores user account and profile information.

### Book

Stores book information such as:

- Title
- Author
- Description
- Cover image
- Category
- Language
- Publication date

### BookListing

Stores marketplace-specific information:

- Seller
- Book
- Price
- Condition
- Description
- Status
- Created date
- Updated date


## 🔎 API Overview

### Books

GET /api/books

Fetch available book listings.

Pagination:

GET /api/books?page=1&limit=12

Search:

GET /api/books?search=javascript


### Public Profile

GET /api/profile/:userId

Fetch a public user's profile.


### User Books

GET /api/profile/:userId/books

Fetch books listed by a specific user.


### Sell a Book

POST /api/sell-book

Create a new book listing.


### Delete a Book Listing

DELETE /api/delete/books/:listingId

Delete an authenticated user's own book listing.


### Wishlist

GET /api/books/:listingId/save

Save or manage a book in the user's wishlist.


## 🔒 Security

BookHand uses session-based authentication and protected backend routes.

Security features include:

- Better Auth session management
- Protected API routes
- Server-side authentication checks
- User ownership validation
- Internal request verification
- Environment-based secrets
- PostgreSQL constraints and relations

Users can only manage or delete their own book listings.


## 📱 Responsive Design

BookHand is designed to provide a consistent experience across:

- Desktop
- Laptop
- Tablet
- Mobile

The navigation system uses a responsive layout with a sidebar for smaller screens.


## 🎯 Project Goals

BookHand was built around a simple idea:

Students often have textbooks they no longer need, while other students need those same books.

BookHand connects these students through a simple marketplace.

Student has an unused book
        ↓
Create a listing
        ↓
Another student discovers the book
        ↓
Book gets a second life

The goal is to make buying and selling used university textbooks simple, affordable, and student-friendly.


## 🔮 Future Improvements

Planned improvements include:

- 💬 Buyer and seller messaging
- 🔔 Real-time notifications
- ⭐ Seller ratings and reviews
- 🔍 Advanced search and filtering
- 📍 Location-based book discovery
- 💳 Online payment integration
- 📦 Order management
- 📊 Seller dashboard
- ⚡ Advanced caching and performance optimization
- 📈 Marketplace analytics


## 👨‍💻 Author

Shoriful Islam

Full Stack Web Developer

### Technologies & Skills

- React
- Next.js
- TypeScript
- JavaScript
- Node.js
- Express.js
- PostgreSQL
- MongoDB
- Prisma
- REST API
- Better Auth
- Tailwind CSS
- shadcn/ui


## 📄 License

This project is currently developed as a personal project.

All rights reserved unless otherwise specified.