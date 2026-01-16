import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import QuoteList from "./components/QuoteList";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const reloadBooks = () => {
    setRefresh(!refresh);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Book Tracker</h1>

      <BookForm onBookCreated={reloadBooks} />

      <BookList
        key={refresh}
        onSelectBook={(book) => setSelectedBook(book)}
      />

      {selectedBook && <QuoteList book={selectedBook} />}
    </div>
  );
}

export default App;
