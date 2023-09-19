import {DataTypes} from 'sequelize';
import {sequelize} from "../database/db.js";



export const Categoria = sequelize.define('Categoria', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

