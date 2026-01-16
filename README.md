📚 Book Tracker

Book Tracker is a simple full‑stack web application that allows users to organize their books into three categories: Pending, Reading, and Finished, and to store their favorite quotes for each book.

The project was built with a clean and minimal architecture using React for the frontend and Flask + SQLite for the backend.

🚀 Features

Add new books with title, author and status

Organize books by status:

Pending

Reading

Finished

Change book status dynamically

Delete books

Add favorite quotes to books in Reading or Finished

View quotes per book

🛠 Tech Stack
Frontend

React

Fetch API

Backend

Flask

Flask SQLAlchemy

Flask CORS

SQLite

📂 Project Structure

book-tracker/
│
├── backend/
│ ├── app.py
│ ├── models.py
│ ├── requirements.txt
│ └── instance/booktracker.db
│
└── frontend/
└── src/
├── components/
│ ├── BookForm.js
│ ├── BookList.js
│ ├── QuoteForm.js
│ └── QuoteList.js
├── services/api.js
└── App.js

⚙️ Installation
Backend

cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py

Backend will run at:
http://127.0.0.1:5000

Frontend

cd frontend
npm install
npm start

Frontend will run at:
http://localhost:3000

🔗 API Endpoints
Method	Endpoint
GET	/books
POST	/books
PUT	/books/
DELETE	/books/
GET	/books//quotes
POST	/books//quotes
🧠 Architecture

REST API using Flask

SQLite relational database

React components separated by responsibility

Centralized API service layer

Clean CRUD flow

🎯 Purpose

This project was built as a learning and portfolio project to demonstrate:

Full‑stack development

REST API design

React state management

SQLAlchemy relationships

Clean architecture

Professional project workflow

📌 Future Improvements

Authentication system

User accounts

Book cover images

Search and filters

Responsive design

Cloud deployment


👨‍💻 Author

Developed by Diego Alejandro Correa as a full‑stack learning project using React and Flask.
