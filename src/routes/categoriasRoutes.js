import { Router } from 'express';
import * as categoriasController from '../controllers/categoriasController.js';
const router = Router();

// Rutas para la entidad de categorías
router.post('/', categoriasController.crearCategoria);
router.get('/', categoriasController.obtenerCategorias);
router.get('/:id', categoriasController.obtenerCategoriaPorID);
router.put('/:id', categoriasController.actualizarCategoria);
router.delete('/:id', categoriasController.eliminarCategoria);

export default router;