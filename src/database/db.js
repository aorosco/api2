import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config(); // Cargar variables de entorno desde .env


export const sequelize = new Sequelize(
  process.env.DB_NAME, // db name
  process.env.DB_USER, // username
  process.env.DB_PASSWORD, // password
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);


//process.env.DB_PORT, // Puerto de la base de datos