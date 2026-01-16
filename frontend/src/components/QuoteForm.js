import { useState } from "react";
import { createQuote } from "../services/api";

function QuoteForm({ bookId, onQuoteAdded }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createQuote(bookId, text);
    setText("");
    onQuoteAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Write a favorite quote..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Add Quote</button>
    </form>
  );
}

export default QuoteForm;
