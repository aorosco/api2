import {DataTypes} from 'sequelize';
import {sequelize} from "../database/db.js";


export const Usuario = sequelize.define('Usuario', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  correo: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  contrasena: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});


