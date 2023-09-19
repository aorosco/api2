import {DataTypes} from 'sequelize';
import {sequelize} from "../database/db.js";



export const Producto = sequelize.define('Producto', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  precio_unitario: {
    type: DataTypes.REAL,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

