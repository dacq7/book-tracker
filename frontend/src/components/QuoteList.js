import { useEffect, useState } from "react";
import { getQuotes } from "../services/api";
import QuoteForm from "./QuoteForm";

function QuoteList({ book }) {
  const [quotes, setQuotes] = useState([]);

  const loadQuotes = async () => {
    const data = await getQuotes(book.id);
    setQuotes(data);
  };

  useEffect(() => {
    if (book) {
      loadQuotes();
    }
  }, [book]);

  if (!book) return null;

  return (
    <div>
      <h3>Quotes from "{book.title}"</h3>

      <QuoteForm bookId={book.id} onQuoteAdded={loadQuotes} />

      {quotes.map((q) => (
        <p key={q.id}>• {q.text}</p>
      ))}
    </div>
  );
}

export default QuoteList;
