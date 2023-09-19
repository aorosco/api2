import app from './app.js'
import { sequelize } from './database/db.js'
/*
////importamos modelos
import './models/Usuario.js'
import './models/Categoria.js'
import './models/Producto.js'
import './models/relaciones.js'
*/
async function main(){
    try {
        console.log("----- Consulta de prueba para verificar conexion  ------ ")
        await sequelize.authenticate();
        ///await sequelize.sync({force:true});
        ///await sequelize.sync();
        console.log("----- conexion exitosa a la base de datos API2 ------ ")
        app.listen(7000)
        console.log("server corriendo en al puerto, 7000")
    } catch (error) {
        console.error("no se pudo conectar a la base de datos: ",error)
    }
}

main();
