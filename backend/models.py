from app import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

# Modelo Usuario
class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    libros = db.relationship('Libro', backref='usuario', lazy=True)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

# Modelo Libro
class Libro(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(200), nullable=False)
    autor = db.Column(db.String(100))
    genero = db.Column(db.String(50))
    anio = db.Column(db.Integer)
    estado = db.Column(db.String(20), default='Pendiente')  # Pendiente, Leyendo, Leído
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)
    comentarios = db.relationship('Comentario', backref='libro', lazy=True)
    frases = db.relationship('FraseFavorita', backref='libro', lazy=True)

# Modelo Comentario
class Comentario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    contenido = db.Column(db.Text, nullable=False)
    fecha = db.Column(db.DateTime, default=datetime.utcnow)
    libro_id = db.Column(db.Integer, db.ForeignKey('libro.id'), nullable=False)

# Modelo FraseFavorita
class FraseFavorita(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    contenido = db.Column(db.Text, nullable=False)
    fecha = db.Column(db.DateTime, default=datetime.utcnow)
    libro_id = db.Column(db.Integer, db.ForeignKey('libro.id'), nullable=False)
