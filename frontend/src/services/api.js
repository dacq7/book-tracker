const API_URL = "http://127.0.0.1:5000";

// BOOKS

export async function getBooks() {
  const res = await fetch(`${API_URL}/books`);
  return res.json();
}

export async function createBook(book) {
  const res = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  return res.json();
}

export async function updateBookStatus(id, status) {
  const res = await fetch(`${API_URL}/books/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return res.json();
}

export async function deleteBook(id) {
  await fetch(`${API_URL}/books/${id}`, {
    method: "DELETE",
  });
}

// QUOTES

export async function getQuotes(bookId) {
  const res = await fetch(`${API_URL}/books/${bookId}/quotes`);
  return res.json();
}

export async function createQuote(bookId, text) {
  const res = await fetch(`${API_URL}/books/${bookId}/quotes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return res.json();
}
