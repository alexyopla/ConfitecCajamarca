// ===== EDITA AQUÍ TU NEGOCIO =====
const NEGOCIO={nombre:"ConfiTec Cajamarca",whatsapp:"51970096956",telefono:"51970096956",horario:"Lunes a sábado · 8:00 a. m. a 7:00 p. m.",garantia:"30 días",nota:"Precios desde. La movilidad puede sumar según tu ubicación."}; // número: 51 + 9 dígitos
// Precios REFERENCIALES: cámbialos por los tuyos
const SERVICIOS=[
{i:"🧹",t:"Limpieza interna",d:"Polvo, ventiladores y pasta térmica para que no se caliente.",p:40},
{i:"💿",t:"Formateo e instalación de Windows",d:"Con Office, antivirus y tus programas.",p:40},
{i:"🛡️",t:"Virus y lentitud",d:"Eliminamos virus y dejamos tu equipo ágil.",p:40},
{i:"⚡",t:"Cambio a disco SSD",d:"El cambio que más se nota: enciende en segundos.",p:40,n:"Mano de obra, el SSD se cotiza aparte"},
{i:"🧠",t:"Memoria RAM y repuestos",d:"RAM, pantalla, teclado, batería o cargador.",p:40,n:"Mano de obra, el repuesto se cotiza aparte"},
{i:"📂",t:"Respaldo y recuperación",d:"Guardamos o recuperamos tus archivos.",p:50},
{i:"📶",t:"WiFi y redes",d:"Router, repetidores y mejor señal en casa u oficina.",p:50},
{i:"🖨️",t:"Impresoras y cámaras",d:"Instalación de impresoras y cámaras de seguridad básicas.",p:40}];
const PAQUETES=[
{n:"Básico",p:40,l:["Limpieza interna","Revisión general","Informe de lo realizado"]},
{n:"Completo",p:80,d:true,l:["Todo lo del Básico","Formateo e instalación de Windows","Antivirus y programas"]},
{n:"Premium",p:120,l:["Todo lo del Completo","Cambio a SSD (mano de obra)","Respaldo de tus archivos"],n2:"El SSD se cotiza aparte"}];
const DISTRITOS=["Cajamarca (ciudad)","Baños del Inca"]; // pon tus zonas
const OPINIONES=[ // confirma con cada cliente que está de acuerdo con su opinión
{n:"Axel Novoa",o:"Llegaron a la hora acordada y mi laptop quedó funcionando mucho mejor. Me explicaron todo lo que hicieron."},
{n:"Nicolás Villanueva",o:"Buen servicio. Hicieron la limpieza en mi casa y el equipo ya no se calienta como antes."},
{n:"Jesús Soto",o:"Atención rápida por WhatsApp y trabajo ordenado. Lo recomiendo."}];
const CASOS=3; // pares antes/después: assets/antes-despues/1-antes.jpg y 1-despues.jpg ...
