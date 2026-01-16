from app import app, db
from flask_migrate import Migrate

# Importar modelos para que Alembic los detecte
from models import Usuario, Libro, Comentario, FraseFavorita

migrate = Migrate(app, db)
