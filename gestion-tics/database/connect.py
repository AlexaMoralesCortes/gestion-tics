import mysql.connector

# Configurar la conexión a la base de datos
config = {
    'user': 'root',
    'password': '1234',
    'host': 'localhost',    # Puedes cambiar 'localhost' por la dirección IP del servidor MySQL si es necesario
    'port': '3307',         # Puerto por defecto de MySQL
    'database': 'gestion_tics'  # Nombre de la base de datos
}

try:
    # Establecer la conexión
    conn = mysql.connector.connect(**config)

    if conn.is_connected():
        print('Conexión exitosa a la base de datos')

        # Aquí puedes agregar tu lógica para interactuar con la base de datos
        # Por ejemplo, ejecutar consultas SQL, insertar datos, etc.

except mysql.connector.Error as e:
    print(f'Error al conectar a la base de datos: {e}')

finally:
    # Cerrar la conexión
    if 'conn' in locals() and conn.is_connected():
        conn.close()
        print('Conexión cerrada correctamente')
