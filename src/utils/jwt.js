import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


const secretKey = process.env.JWT_SECRET;

// Función para generar un token JWT
export function generarToken(payload) {
  try {
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // El token expirará en 1 hora
    return token;
  } catch (error) {
    // Manejo de errores, como la falta de secretKey
    console.error('Error al generar el token:', error);
    return null;
  }
}

// Función para verificar un token JWT
export function verificarToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso no autorizado' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.usuario = decoded; // Agrega la información del usuario al objeto de solicitud
    next(); // Continúa con la siguiente función middleware
  } catch (error) {
    return res.status(403).json({ mensaje: 'Token inválido' });
  }
}






export default {generarToken, verificarToken}