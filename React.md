# ⚛️ React Developer Assignment: Book Review App (Frontend Only)

## 📌 Objective
Build a responsive and dynamic **Book Review Platform UI** using React. The app should allow users to:
- View a list of books
- Browse details and reviews for each book
- Add/Edit/Delete reviews (locally stored)
- Simulate login/logout using LocalStorage

This project is designed to test your React fundamentals, component structure, state management, routing, and UI/UX decisions.

---

## 🧰 Tech Stack
- React (latest version)
- React Router DOM
- CSS / Tailwind / Material UI (any of your choice)
- Optional: Axios, Context API

---

## 📋 Project Requirements

### 🧑 Authentication Simulation
- A **Login Page** (fake authentication using LocalStorage)
- A **Register Page** (mock signup that stores user info in local memory)
- Show "Logged in as [username]" in the navbar or header

### 📚 Book List Page
- Display a list of books (use dummy static data or a simple JSON API)
- Each book should show title, author, and rating preview
- Clicking a book navigates to its detail page

### 📖 Book Detail Page
- Full book details (title, description, author, genre, etc.)
- List of reviews: username, rating (1-5 stars), comment
- Add Review form (rating, comment) — stored in LocalStorage
- Edit/Delete only your reviews

### 💬 Reviews
- Form validation for empty fields or invalid inputs
- Rating input as dropdown or star picker
- Allow review update/delete only if "current user" created it

### 🔄 State Management
- Use React Hooks (`useState`, `useEffect`)
- Store reviews and user info in `LocalStorage`
- Conditional rendering for login state

---

## 🌈 UI Expectations
- **Better UI = More points**
- Must be **responsive** for desktop and mobile
- Use a consistent design system or color scheme
- Good UX for forms, error handling, and feedback

---

## 🚀 Bonus Points
- Theme toggle (light/dark)
- React Context API for global state
- Use a third-party rating component (e.g., react-rating-stars-component)
- Responsive grid layout for book cards
- Add book search and filter by genre or rating
- Deploy the frontend on Vercel or Netlify

---

## 🧪 Evaluation Criteria
| Area                      | Weightage |
|---------------------------|-----------|
| React Component Structure | 25%       |
| Routing & State Handling  | 20%       |
| Form & Input Management   | 20%       |
| UI/UX Quality             | 15%       |
| Bonus Features            | 10%       |
| Code Quality & Readability| 10%       |

---

## 📤 Submission Guidelines
1. Push the project to a GitHub repository
2. Add a detailed `README.md` that includes:
   - Setup & install instructions
   - Features implemented
   - Screenshots (optional but appreciated)
   - Live demo link (if deployed)

---

## ⏰ Deadline
You will have **48 hours** from the time of receiving the assignment.

---

## 📝 Terms & Expectations
- All code must be written by you.
- Do not use AI to autogenerate entire pages/components.
- Maintain code readability and folder structure.
- Focus on clear UX and efficient logic.
- You can use `create-react-app` or `Vite`.

---

**Happy coding! 🚀**
