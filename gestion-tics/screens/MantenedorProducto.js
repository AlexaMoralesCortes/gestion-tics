import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const MantenedorProducto = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mantenedor de Productos</Text>
      {/* Formulario para ingresar datos del producto */}
      <TextInput placeholder="Nombre del producto" style={styles.input} />
      <TextInput placeholder="Precio" style={styles.input} keyboardType="numeric" />
      <Button title="Guardar Producto" onPress={() => { /* Función para guardar producto */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
});

export default MantenedorProducto;
