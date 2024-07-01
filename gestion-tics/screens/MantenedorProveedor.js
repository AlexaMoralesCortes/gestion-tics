import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const MantenedorProveedor = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mantenedor de Proveedor</Text>
      {/* Formulario para ingresar datos del proveedor */}
      <TextInput placeholder="Nombre del proveedor" style={styles.input} />
      <TextInput placeholder="Contacto" style={styles.input} />
      <Button title="Guardar Proveedor" onPress={() => { /* Función para guardar proveedor */ }} />
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

export default MantenedorProveedor;
