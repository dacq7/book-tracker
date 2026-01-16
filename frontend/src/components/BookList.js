import { useEffect, useState } from "react";
import { getBooks, updateBookStatus, deleteBook } from "../services/api";

function BookList({ onSelectBook }) {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const changeStatus = async (id, status) => {
    await updateBookStatus(id, status);
    loadBooks();
  };

  const removeBook = async (id) => {
    await deleteBook(id);
    loadBooks();
  };

  const renderGroup = (status, title) => (
    <div>
      <h3>{title}</h3>
      {books
        .filter((b) => b.status === status)
        .map((book) => (
          <div key={book.id}>
            <strong>{book.title}</strong> — {book.author}

            <select
              value={book.status}
              onChange={(e) => changeStatus(book.id, e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="reading">Reading</option>
              <option value="finished">Finished</option>
            </select>

            <button onClick={() => removeBook(book.id)}>Delete</button>

            {(book.status === "reading" || book.status === "finished") && (
              <button onClick={() => onSelectBook(book)}>
                Quotes
              </button>
            )}
          </div>
        ))}
    </div>
  );

  return (
    <div>
      {renderGroup("pending", "Pending")}
      {renderGroup("reading", "Reading")}
      {renderGroup("finished", "Finished")}
    </div>
  );
}

export default BookList;
