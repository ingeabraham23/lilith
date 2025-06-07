import db from "../db";

export const eliminarUltimaUnidad = async (ruta) => {
  // Buscar todas las unidades con la ruta dada, sin importar el tipo
  const ultimaUnidad = await db.unidades
    .where("ruta")
    .equals(ruta)
    .reverse()
    .first(); // Última unidad registrada para esa ruta

  if (ultimaUnidad) {
    await db.unidades.delete(ultimaUnidad.id);
    return true;
  }

  return false;
};