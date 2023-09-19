import { Usuario } from '../models/Usuario.js';
import bcrypt from 'bcrypt';
import {generarToken} from '../utils/jwt.js';

// Ruta para iniciar sesión y obtener un token JWT
export async function iniciarSesion(req, res){
    const { correo, contrasena } = req.body;
    try {
      // Verifica si el usuario existe en la base de datos
      const usuario = await Usuario.findOne({ where: { correo } });
      if (!usuario) {
        return res.status(401).json({ mensaje: 'Credenciales incorrectas correo' });
      }
      // Compara la contraseña proporcionada con la almacenada en la base de datos
      const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);
      if (!contrasenaValida) {
        return res.status(401).json({ mensaje: 'Credenciales incorrectas contraseña' });
      }
      // Genera un token JWT
      const payload = { id: usuario.id, correo: usuario.correo };
      const token = generarToken(payload);
      res.status(200).json({ mensaje: 'Inicio de sesión exitoso', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al iniciar sesión' });
    }
};


