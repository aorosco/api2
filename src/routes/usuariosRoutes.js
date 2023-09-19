import { Router } from 'express';
import * as usuariosController from '../controllers/usuariosController.js';
const router = Router();


// Rutas para la entidad de usuarios

///
router.post('/', usuariosController.crearUsuario);
router.get('/', usuariosController.obtenerUsuarios);
router.get('/:id', usuariosController.obtenerUsuarioPorID);
router.put('/:id', usuariosController.actualizarUsuario);
router.delete('/:id', usuariosController.eliminarUsuario);



export default router;

