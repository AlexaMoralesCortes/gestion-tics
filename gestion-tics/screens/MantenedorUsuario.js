import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const MantenedorUsuario = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mantenedor de Usuario</Text>
      {/* Formulario para ingresar datos del usuario */}
      <TextInput placeholder="Nombre de usuario" style={styles.input} />
      <TextInput placeholder="Rol" style={styles.input} />
      <Button title="Guardar Usuario" onPress={() => { /* Función para guardar usuario */ }} />
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

export default MantenedorUsuario;
