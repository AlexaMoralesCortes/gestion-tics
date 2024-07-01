from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilita CORS para todos los endpoints de la app

# Datos de ejemplo para simular una base de datos
productos = [
    {"id": 1, "nombre": "Producto A", "cantidad": 100},
    {"id": 2, "nombre": "Producto B", "cantidad": 50},
    {"id": 3, "nombre": "Producto C", "cantidad": 200}
]

# Endpoint para obtener todos los productos
@app.route('/api/productos', methods=['GET'])
def obtener_productos():
    """
    Obtiene todos los productos.
    """
    return jsonify(productos), 200

# Endpoint para obtener un producto por su ID
@app.route('/api/productos/<int:producto_id>', methods=['GET'])
def obtener_producto(producto_id):
    """
    Obtiene un producto por su ID.
    """
    producto = next((p for p in productos if p['id'] == producto_id), None)
    if producto:
        return jsonify(producto), 200
    return jsonify({"mensaje": "Producto no encontrado"}), 404

# Endpoint para agregar un nuevo producto
@app.route('/api/productos', methods=['POST'])
def agregar_producto():
    """
    Agrega un nuevo producto.
    """
    nuevo_producto = request.json
    productos.append(nuevo_producto)
    return jsonify({"mensaje": "Producto agregado", "producto": nuevo_producto}), 201

# Endpoint para actualizar un producto existente
@app.route('/api/productos/<int:producto_id>', methods=['PUT'])
def actualizar_producto(producto_id):
    """
    Actualiza un producto existente por su ID.
    """
    producto_actualizado = request.json
    for p in productos:
        if p['id'] == producto_id:
            p.update(producto_actualizado)
            return jsonify({"mensaje": "Producto actualizado", "producto": p}), 200
    return jsonify({"mensaje": "Producto no encontrado"}), 404

# Endpoint para eliminar un producto
@app.route('/api/productos/<int:producto_id>', methods=['DELETE'])
def eliminar_producto(producto_id):
    """
    Elimina un producto por su ID.
    """
    global productos
    productos = [p for p in productos if p['id'] != producto_id]
    return jsonify({"mensaje": "Producto eliminado", "productos": productos}), 200

if __name__ == '__main__':
    app.run(debug=True)
