import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const TransaccionEntrada = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transacción de Entrada</Text>
      {/* Formulario para ingresar datos de la transacción de entrada */}
      <TextInput placeholder="Producto" style={styles.input} />
      <TextInput placeholder="Cantidad" style={styles.input} keyboardType="numeric" />
      <Button title="Registrar Entrada" onPress={() => { /* Función para registrar entrada */ }} />
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

export default TransaccionEntrada;
