import { Usuario } from '../models/Usuario.js';
import bcrypt from 'bcrypt';
import * as jwt from '../utils/jwt.js';


// Controlador para crear un nuevo usuario
export async function crearUsuario(req, res) {
  try {
    const { nombre, correo, contrasena } = req.body;

    // Verifica si el correo ya está en uso
    const usuarioExistente = await Usuario.findOne({ where: { correo } });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El correo ya está en uso' });
    }

    // Hashea la contraseña antes de almacenarla en la base de datos
    const hashedContrasena = await bcrypt.hash(contrasena, 10);

    // Crea un nuevo usuario en la base de datos
    const nuevoUsuario = await Usuario.create({ nombre, correo, contrasena: hashedContrasena });

    res.status(201).json({ mensaje: 'Usuario creado con éxito', usuario: nuevoUsuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el usuario' });
  }
};

// Controlador para obtener todos los usuarios
export async function obtenerUsuarios(req, res) {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los usuarios' });
  }
};

// Controlador para obtener un usuario por ID
export async function obtenerUsuarioPorID(req, res) {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el usuario' });
  }
};

// Controlador para actualizar un usuario por ID
export async function actualizarUsuario (req, res) {
  const { id } = req.params;
  const { nombre, correo, contrasena, estado } = req.body;

  try {
    // Verifica si el usuario existe
    const usuarioExistente = await Usuario.findByPk(id);
    if (!usuarioExistente) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // Actualiza los campos proporcionados
    usuarioExistente.nombre = nombre;
    usuarioExistente.correo = correo;
    usuarioExistente.contrasena = await bcrypt.hash(contrasena, 10);
    usuarioExistente.estado = estado;

    // Guarda los cambios en la base de datos
    await usuarioExistente.save();

    res.status(200).json({ mensaje: 'Usuario actualizado con éxito', usuario: usuarioExistente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar el usuario' });
  }
};

// Controlador para eliminar un usuario por ID
export async function eliminarUsuario (req, res){
  const { id } = req.params;

  try {
    // Verifica si el usuario existe
    const usuarioExistente = await Usuario.findByPk(id);
    if (!usuarioExistente) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // Elimina el usuario de la base de datos
    await usuarioExistente.destroy();

    res.status(200).json({ mensaje: 'Usuario eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el usuario' });
  }
};
