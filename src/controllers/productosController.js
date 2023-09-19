import { Producto } from '../models/Producto.js';

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

// Controlador para crear un nuevo producto
export async function crearProducto(req, res)  {
  try {
    const { nombre, precio_unitario, estado, categoria_id, usuario_id } = req.body;

    // Crea un nuevo producto en la base de datos
    const nuevoProducto = await Producto.create({ nombre, precio_unitario, estado, categoria_id, usuario_id });

    res.status(201).json({ mensaje: 'Producto creado con éxito', producto: nuevoProducto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el producto' });
  }
};

// Controlador para obtener todos los productos
export async function obtenerProductos(req, res)  {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los productos' });
  }
};

// Controlador para obtener un producto por su ID
export async function obtenerProductoPorID(req, res)  {
  const { id } = req.params;

  try {
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el producto' });
  }
};

// Controlador para actualizar un producto por su ID
export async function actualizarProducto(req, res)  {
  const { id } = req.params;
  const { nombre, precio_unitario, estado, categoria_id, usuario_id } = req.body;

  try {
    // Verifica si el producto existe
    const productoExistente = await Producto.findByPk(id);
    if (!productoExistente) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    // Actualiza los campos proporcionados
    productoExistente.nombre = nombre;
    productoExistente.precio_unitario = precio_unitario;
    productoExistente.estado = estado;
    productoExistente.categoria_id = categoria_id;
    productoExistente.usuario_id = usuario_id;

    // Guarda los cambios en la base de datos
    await productoExistente.save();

    res.status(200).json({ mensaje: 'Producto actualizado con éxito', producto: productoExistente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar el producto' });
  }
};

// Controlador para eliminar un producto por su ID
export async function eliminarProducto(req, res)  {
  const { id } = req.params;

  try {
    // Verifica si el producto existe
    const productoExistente = await Producto.findByPk(id);
    if (!productoExistente) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    // Elimina el producto de la base de datos
    await productoExistente.destroy();

    res.status(200).json({ mensaje: 'Producto eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el producto' });
  }
};
