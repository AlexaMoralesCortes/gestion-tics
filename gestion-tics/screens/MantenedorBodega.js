import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const MantenedorBodega = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mantenedor de Bodega</Text>
      {/* Formulario para ingresar datos de la bodega */}
      <TextInput placeholder="Nombre de la bodega" style={styles.input} />
      <TextInput placeholder="Ubicación" style={styles.input} />
      <Button title="Guardar Bodega" onPress={() => { /* Función para guardar bodega */ }} />
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

export default MantenedorBodega;
