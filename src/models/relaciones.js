////importamos modelos
import {Usuario} from './Usuario.js'
import {Categoria} from './Categoria.js'
import {Producto} from './Producto.js'

// Definimos la relación uno a muchos con categorías y productos
Usuario.hasMany(Categoria, { foreignKey: 'usuario_id' ,sourceKey:"id" });
Usuario.hasMany(Producto, { foreignKey: 'usuario_id' ,sourceKey:"id" });

// Definimos la relación muchos a uno con usuarios y la relación uno a muchos con productos
Categoria.hasMany(Producto, { foreignKey: 'categoria_id',sourceKey:"id" });
Categoria.belongsTo(Usuario, { foreignKey: 'usuario_id',targetKey: "id" });


// Definimos la relación muchos a uno con usuarios y categorías
Producto.belongsTo(Categoria, { foreignKey: 'categoria_id',targetKey: "id" });
Producto.belongsTo(Usuario, { foreignKey: 'usuario_id',targetKey: "id"});