import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DataTable = ({ data }) => {
  // Verifica que data esté definido y sea un arreglo
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No hay datos disponibles</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tabla de Datos</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Columna 1</Text>
          <Text style={styles.cellHeader}>Columna 2</Text>
          <Text style={styles.cellHeader}>Columna 3</Text>
          {/* Añadir más columnas según sea necesario */}
        </View>
        {data.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.columna1}</Text>
            <Text style={styles.cell}>{item.columna2}</Text>
            <Text style={styles.cell}>{item.columna3}</Text>
            {/* Añadir más celdas según sea necesario */}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cellHeader: {
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default DataTable;

