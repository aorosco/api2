import { Categoria } from '../models/Categoria.js';
//////////////////////////////////////////////////////////
import * as jwt from '../utils/jwt.js';

// Middleware para verificar el token JWT
function verificarTokenMiddleware(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso no autorizado, token no proporcionado' });
  }

  const decoded = jwt.verificarToken(token);
  if (!decoded) {
    return res.status(401).json({ mensaje: 'Token inválido o expirado' });
  }

  // Si el token es válido, puedes continuar con la lógica del controlador
  next();
}
//////////////////////////////////////////////////////////


// Controlador para crear una nueva categoría
export async function crearCategoria(req, res)  {
  try {
    const { nombre, usuario_id } = req.body;

    // Crea una nueva categoría en la base de datos
    const nuevaCategoria = await Categoria.create({ nombre, usuario_id });

    res.status(201).json({ mensaje: 'Categoría creada con éxito', categoria: nuevaCategoria });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear la categoría' });
  }
};

// Controlador para obtener todas las categorías
export async function obtenerCategorias(req, res)  {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener las categorías' });
  }
};

// Controlador para obtener una categoría por su ID
export async function obtenerCategoriaPorID(req, res)  {
  const { id } = req.params;

  try {
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
      return res.status(404).json({ mensaje: 'Categoría no encontrada' });
    }
    res.status(200).json(categoria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener la categoría' });
  }
};

// Controlador para actualizar una categoría por su ID
export async function actualizarCategoria(req, res)  {
  const { id } = req.params;
  const { nombre, usuario_id } = req.body;

  try {
    // Verifica si la categoría existe
    const categoriaExistente = await Categoria.findByPk(id);
    if (!categoriaExistente) {
      return res.status(404).json({ mensaje: 'Categoría no encontrada' });
    }

    // Actualiza los campos proporcionados
    categoriaExistente.nombre = nombre;
    categoriaExistente.usuario_id = usuario_id;

    // Guarda los cambios en la base de datos
    await categoriaExistente.save();

    res.status(200).json({ mensaje: 'Categoría actualizada con éxito', categoria: categoriaExistente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar la categoría' });
  }
};

// Controlador para eliminar una categoría por su ID
export async function eliminarCategoria(req, res)  {
  const { id } = req.params;

  try {
    // Verifica si la categoría existe
    const categoriaExistente = await Categoria.findByPk(id);
    if (!categoriaExistente) {
      return res.status(404).json({ mensaje: 'Categoría no encontrada' });
    }

    // Elimina la categoría de la base de datos
    await categoriaExistente.destroy();

    res.status(200).json({ mensaje: 'Categoría eliminada con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar la categoría' });
  }
};