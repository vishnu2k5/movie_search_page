# 🎬 Movie Explorer

A dynamic and interactive movie search web app built with **React.js**, powered by the **TMDB (The Movie Database) API** for real-time movie data. The app includes a **live search**, displays **trending movies**, and stores the user's **top search history** using **Appwrite** as a backend service.

---

## 🚀 Live Demo

🔗 [View Live Site](https://your-live-site-link.netlify.app)

> Replace the link with your deployed URL (e.g., Netlify or Vercel)

---

## ✨ Features

- 🔍 **Real-Time Search** – Instantly search for movies with live results from TMDB.
- 🔥 **Trending Movies** – Automatically shows the most popular movies on the homepage.
- 📊 **Top Searches Tracker** – Tracks user search queries and displays the most common ones using Appwrite's database.
- 🧠 **Backend Integration** – Appwrite is used to securely store and retrieve recent searches.
- 📱 **Responsive Design** – Optimized for both desktop and mobile viewing.
- ⚡ **Fast & Lightweight** – Built with React and optimized for performance.

---

## 🛠 Tech Stack

| Technology | Usage |
|------------|-------|
| **React.js** | Frontend Framework |
| **TMDB API** | Real-time Movie Data |
| **Appwrite** | Backend (database for storing search history) |
| **Tailwind CSS** *(optional)* | Styling and Layout |
| **Vite** or **CRA** | Development environment |

---


## ⚙️ Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/vishnu2k5/movie_search_page.git
cd movie_search_page

npm install

VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT=your_project_id
VITE_APPWRITE_DATABASE=your_database_id
VITE_APPWRITE_COLLECTION=your_collection_id

npm run dev


