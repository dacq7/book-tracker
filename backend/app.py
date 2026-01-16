from flask import Flask, request, jsonify
from flask_cors import CORS

from models import db, Book, Quote

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///booktracker.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()

# -------------------
# BOOK ROUTES
# -------------------

@app.route("/books", methods=["GET"])
def get_books():
    books = Book.query.all()
    return jsonify([b.to_dict() for b in books])


@app.route("/books", methods=["POST"])
def create_book():
    data = request.json

    book = Book(
        title=data["title"],
        author=data["author"],
        status=data["status"]
    )

    db.session.add(book)
    db.session.commit()

    return jsonify(book.to_dict()), 201


@app.route("/books/<int:book_id>", methods=["PUT"])
def update_book(book_id):
    book = Book.query.get_or_404(book_id)
    data = request.json

    book.status = data.get("status", book.status)

    db.session.commit()
    return jsonify(book.to_dict())


@app.route("/books/<int:book_id>", methods=["DELETE"])
def delete_book(book_id):
    book = Book.query.get_or_404(book_id)
    db.session.delete(book)
    db.session.commit()
    return jsonify({"message": "Book deleted"})


# -------------------
# QUOTE ROUTES
# -------------------

@app.route("/books/<int:book_id>/quotes", methods=["GET"])
def get_quotes(book_id):
    quotes = Quote.query.filter_by(book_id=book_id).all()
    return jsonify([q.to_dict() for q in quotes])


@app.route("/books/<int:book_id>/quotes", methods=["POST"])
def create_quote(book_id):
    data = request.json

    quote = Quote(
        text=data["text"],
        book_id=book_id
    )

    db.session.add(quote)
    db.session.commit()

    return jsonify(quote.to_dict()), 201


# -------------------

if __name__ == "__main__":
    app.run(debug=True)
