import Dexie from "dexie";

// Inicializar la base de datos Dexie
const db = new Dexie('LilithUnidadesDB');
db.version(1).stores({
  unidades: '++id,ruta,tipo,numeroUnidad,horaRegistro',
});

export default db;