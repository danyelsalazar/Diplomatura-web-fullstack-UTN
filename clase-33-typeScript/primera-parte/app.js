import { add } from "./operations.js";
// Importamos el módulo nativo 'os'
import os from 'node:os';



const resultAdd = add(1,4)

console.log(resultAdd);


// unos metodos para ver cosas de mi equipo:

// Información básica del sistema
console.log('Sistema operativo:', os.platform());
console.log('Arquitectura:', os.arch());
// CPU
console.log('CPUs:', os.cpus().length);
// Memoria
console.log('Memoria total (GB):', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2));
console.log('Memoria libre (GB):', (os.freemem() / 1024 / 1024 / 1024).toFixed(2));
// Usuario actual
console.log('Usuario:', os.userInfo().username);
// Tiempo encendido del sistema (uptime)
console.log('Uptime (horas):', (os.uptime() / 3600).toFixed(2));