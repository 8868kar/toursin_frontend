# 🌍 ToursIn - Travel Booking Frontend

Welcome to the **ToursIn** frontend repository! This project is a modern, responsive, and production-ready React web application built for a travel agency platform.

## 🚀 Features

* **Modern & Responsive UI:** Designed with Tailwind CSS, featuring beautiful gradients, glassmorphism, smooth animations, and a rich user experience on both mobile and desktop.
* **🌓 Dark & Light Mode:** Integrated theme toggling across the entire application for enhanced user comfort.
* **⚡ Blazing Fast Setup:** Built using [Vite](https://vitejs.dev/) + React for an incredibly fast development environment.
* **🔐 Global State Management:** Powered by [Zustand](https://github.com/pmndrs/zustand) with `persist` middleware to manage user authentication and wishlists in local storage seamlessly.
* **📝 Form Validation:** Robust and user-friendly form validation for Contact Us and Login/Signup Modals using [`react-hook-form`](https://react-hook-form.com/) and [`zod`](https://zod.dev/).
* **🔔 Toast Notifications:** Interactive feedback loops via `react-hot-toast` to provide premium UI/UX during user interactions.
* **🌐 SEO Ready:** Page-level meta tags implemented using `react-helmet-async`.
* **🔌 Backend Integration Ready:** Dedicated `src/services/api.js` utilizing `axios` with global interceptors for auth tokens and error handling. Pre-built dummy endpoints make backend handoff extremely easy.

## 🛠️ Tech Stack

* **Core:** React 18, React Router v6
* **Styling:** Tailwind CSS, Vanilla CSS (`index.css`), Lucide React Icons
* **State Management:** Zustand
* **Form Validation:** React Hook Form + Zod SCHEMA
* **API Calls:** Axios
* **Tooling:** Vite

## 📂 Project Structure

```text
src/
├── assets/          # Images and static files
├── components/      # Reusable UI components (Header, Footer, TourCard, Modals, Skeleton, Breadcrumb)
├── pages/           # Application pages (Tours, Contact, Profile, Admin, Vendor, User, etc.)
├── services/        # Centralized API requests and Axios config (api.js)
├── store/           # Zustand global state (useStore.js for Auth and Wishlist)
├── App.jsx          # Main application routing & context providers
└── main.jsx         # React application entry point
```

## 💻 Getting Started Locally

To get a local copy up and running, follow these steps:

### Prerequisites

* Node.js (v16 or higher)
* npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/8868kar/toursin_frontend.git
   ```

2. Navigate into the project directory:
   ```bash
   cd toursin_frontend/frontend
   ```

3. Install NPM packages (Note: using legacy-peer-deps to ignore certain react 18 dependency clashes):
   ```bash
   npm install --legacy-peer-deps
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## 🚢 Deployment (Vercel)

This project is configured to be deployed easily on **Vercel**. 
* A `.npmrc` file is included in the root to ensure Vercel installs dependencies successfully using the `--legacy-peer-deps` flag automatically.
* Simply import the repository in Vercel and it will automatically detect the Vite build settings!

---

*Custom Crafted for the ultimate travel booking experience. Enjoy the journey!* ✈️
