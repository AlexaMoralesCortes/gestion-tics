import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { obtenerProductos, agregarProducto, actualizarProducto, eliminarProducto } from './services/ApiService'; // Ajusta la ruta según tu estructura de archivos

const EjemploComponente = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerProductos();
        setProductos(data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAgregarProducto = async () => {
    try {
      const nuevoProducto = {
        nombre: 'Nuevo Producto',
        descripcion: 'Descripción del nuevo producto',
        precio: 100,
      };
      const productoAgregado = await agregarProducto(nuevoProducto);
      console.log('Producto agregado:', productoAgregado);
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  };

  const handleActualizarProducto = async (id) => {
    try {
      const productoActualizado = {
        nombre: 'Producto Actualizado',
        descripcion: 'Descripción actualizada del producto',
        precio: 150,
      };
      const productoActualizadoRespuesta = await actualizarProducto(id, productoActualizado);
      console.log('Producto actualizado:', productoActualizadoRespuesta);
    } catch (error) {
      console.error(`Error al actualizar producto ${id}:`, error);
    }
  };

  const handleEliminarProducto = async (id) => {
    try {
      const respuesta = await eliminarProducto(id);
      console.log('Producto eliminado:', respuesta);
    } catch (error) {
      console.error(`Error al eliminar producto ${id}:`, error);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Productos:</Text>
      {productos.length > 0 ? (
        productos.map((producto) => (
          <View key={producto.id} style={{ marginBottom: 10 }}>
            <Text>{producto.nombre}</Text>
            <Button title="Actualizar" onPress={() => handleActualizarProducto(producto.id)} />
            <Button title="Eliminar" onPress={() => handleEliminarProducto(producto.id)} />
          </View>
        ))
      ) : (
        <Text>No hay productos disponibles</Text>
      )}
      <Button title="Agregar Producto" onPress={handleAgregarProducto} />
    </View>
  );
};

export default EjemploComponente;
