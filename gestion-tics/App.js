import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

// Importar componentes de screens
import MantenedorProducto from './screens/MantenedorProducto';
import MantenedorBodega from './screens/MantenedorBodega';
import MantenedorProveedor from './screens/MantenedorProveedor';
import MantenedorUsuario from './screens/MantenedorUsuario';
import TransaccionEntrada from './screens/TransaccionEntrada';
import TransaccionSalida from './screens/TransaccionSalida';
import Consulta1 from './screens/Consulta1';
import Consulta2 from './screens/Consulta2';
import Consulta3 from './screens/Consulta3';
import Consulta4 from './screens/Consulta4';

// Importar componente DataTable con los datos
import DataTable from './components/DataTable';

// Importar servicio de ApiService para obtener datos
import ApiService from './services/ApiService';

export default function App() {
  // Ejemplo de estado para almacenar datos de productos
  const [productos, setProductos] = useState([]);

  // Ejemplo de efecto para cargar datos al montar el componente
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        // Llamar al servicio para obtener productos (ejemplo)
        const productosData = await ApiService.obtenerProductos();
        setProductos(productosData);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mantenedores</Text>
        <MantenedorProducto />
        <MantenedorBodega />
        <MantenedorProveedor />
        <MantenedorUsuario />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Transacciones</Text>
        <TransaccionEntrada />
        <TransaccionSalida />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Consultas</Text>
        <Consulta1 />
        <Consulta2 />
        <Consulta3 />
        <Consulta4 />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tabla de Datos</Text>
        {/* Pasar datos a DataTable */}
        <DataTable data={productos} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
