import { Router } from 'express';
import * as productosController from '../controllers/productosController.js';
const router = Router();

// Rutas para la entidad de productos
router.post('/', productosController.crearProducto);
router.get('/', productosController.obtenerProductos);
router.get('/:id', productosController.obtenerProductoPorID);
router.put('/:id', productosController.actualizarProducto);
router.delete('/:id', productosController.eliminarProducto);

export default router;