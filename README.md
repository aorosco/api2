
# Proyecto API2

Descripción breve de tu proyecto.

## Requisitos previos

Asegúrate de tener las siguientes herramientas instaladas antes de comenzar:

- Node.js (versión v20.5.1): [Descargar Node.js](https://nodejs.org/)
- npm (administrador de paquetes de Node.js, generalmente se instala con Node.js)
- Postgres

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona este repositorio en tu máquina local:

   ```bash
   https://github.com/aorosco/api2.git

2. Ve al directorio del proyecto:

```bash
mkdir api2   -- si no esta creado el directorio
```bash
cd api2

3. Instala las dependencias del proyecto utilizando npm:
```bash
npm install

4. Instalacion de la base de datos
Inicia sesion
```bash
psql -U postgres
Crea la base de datos con el nombre api2
```bash
CREATE DATABASE api2;
Inicia la consola de PostgreSQL como el usuario "postgres" (o un superusuario que tenga permisos de administración). Puedes hacerlo ejecutando:
```bash
psql -U postgres
Crea el usuario "ale" con una contraseña. Sustituye 'tu_contraseña' por la contraseña que deseas asignar al usuario:
    CREATE USER ale WITH PASSWORD 'tu_contraseña';
Asigna los privilegios necesarios al usuario "ale" sobre la base de datos "api2". Por ejemplo, para darle acceso total a la base de datos, puedes ejecutar:
    GRANT ALL PRIVILEGES ON DATABASE api2 TO ale;
Esto le otorgará al usuario "ale" todos los privilegios en la base de datos "api2".
Finalmente, para asegurarte de que los cambios surtan efecto, actualiza los privilegios:
    ALTER USER ale WITH SUPERUSER;
Instalar n postgres  el DDL que esta en la ruta:
src/database/schemas.sql
configurar el archivo .ENV antes de ejecutar la API, debes configurar algunas variables de entorno y ajustar la configuración según sea necesario.

Uso
Para iniciar el servidor de la API, ejecuta el siguiente comando:
    npm start
La API estará disponible en http://localhost:7000

Datos de Prueba:
Usuario Para Iniciar Sesion
{
  "id": 1,
  "nombre": "Alejandro Orosco",
  "correo": "orosco@gmail.com",
  "contrasena": "123456"
}
Categoría
{
  "nombre": "NombreCategoria1"
}

Producto
 {
    "id": 1,
    "nombre": "Nombre de producto1",
    "precio_unitario": 10,
    "estado": true,
    "createdAt": "2001-01-01T04:00:00.000Z",
    "updatedAt": "2002-02-02T04:00:00.000Z"
  }


