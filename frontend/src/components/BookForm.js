import { useState } from "react";
import { createBook } from "../services/api";

function BookForm({ onBookCreated }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("pending");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createBook({ title, author, status });

    setTitle("");
    setAuthor("");
    setStatus("pending");

    onBookCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Book</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="reading">Reading</option>
        <option value="finished">Finished</option>
      </select>

      <button type="submit">Save</button>
    </form>
  );
}

export default BookForm;
