import mongoose from "mongoose";

export async function conectarDB() {
  try {
    // Intenta conectarse usando la URI guardada en el archivo .env
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(" Conectado con éxito a MongoDB Atlas (TiendaComics)");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
    process.exit(1); // Detiene la aplicación si no se puede conectar
  }
}
