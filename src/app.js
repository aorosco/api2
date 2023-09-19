import express from "express";

import usuariosRoutes from './routes/usuariosRoutes.js';
import categoriasRoutes from './routes/categoriasRoutes.js';
import productosRoutes from './routes/productosRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { verificarToken } from "./utils/jwt.js";



const app = express();


// Otro middleware y configuraciones...
app.use(express.json());
// Importa las rutas de las entidades

// Asocia las rutas a las URL correspondientes
app.use('/api/login', authRoutes);
app.use('/api/usuarios',verificarToken, usuariosRoutes);
app.use('/api/categorias',verificarToken, categoriasRoutes);
app.use('/api/productos',verificarToken, productosRoutes);

// Otro middleware y configuraciones...



export default app;