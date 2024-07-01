import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000/api'; // Reemplaza con la URL de tu servidor Flask

const ApiService = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

// Función para obtener todos los productos
export const obtenerProductos = async () => {
  try {
    const response = await ApiService.get('/productos');
    return response.data;
  } catch (error) {
    throw new Error(`Error al obtener productos: ${error.message}`);
  }
};

// Función para obtener un producto por su ID
export const obtenerProductoPorId = async (productoId) => {
  try {
    const response = await ApiService.get(`/productos/${productoId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error al obtener producto ${productoId}: ${error.message}`);
  }
};

// Función para agregar un nuevo producto
export const agregarProducto = async (nuevoProducto) => {
  try {
    const response = await ApiService.post('/productos', nuevoProducto);
    return response.data;
  } catch (error) {
    throw new Error(`Error al agregar producto: ${error.message}`);
  }
};

// Función para actualizar un producto existente
export const actualizarProducto = async (productoId, productoActualizado) => {
  try {
    const response = await ApiService.put(`/productos/${productoId}`, productoActualizado);
    return response.data;
  } catch (error) {
    throw new Error(`Error al actualizar producto ${productoId}: ${error.message}`);
  }
};

// Función para eliminar un producto
export const eliminarProducto = async (productoId) => {
  try {
    const response = await ApiService.delete(`/productos/${productoId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error al eliminar producto ${productoId}: ${error.message}`);
  }
};

export default ApiService;

