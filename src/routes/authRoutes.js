import { Router } from 'express';
import { iniciarSesion } from '../controllers/authController.js';
import jwtMiddleware from '../utils/jwt.js';

const router = Router();

// Ruta para iniciar sesión
router.get('/', iniciarSesion);

// Rutas protegidas para productos


export default router;
