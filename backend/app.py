from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager

# Configuración de la app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'tu_clave_secreta_aqui'

# Inicialización de extensiones
db = SQLAlchemy(app)
jwt = JWTManager(app)
CORS(app)

# Ruta de prueba
@app.route('/')
def home():
    return "Backend funcionando"

# Ejecutar la app
if __name__ == '__main__':
    app.run(debug=True)
