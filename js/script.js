/* ==========================================================================
   CATÁLOGO DE SILENCIADORES — script.js
   --------------------------------------------------------------------------
   Índice:
   1. Animación al hacer scroll (declarada primero para evitar errores)
   2. Datos de productos
   3. Configuración general
   4. Render del grid de productos + tabs de categoría
   5. Paginación
   6. Buscador en tiempo real
   7. Modal de producto
   8. Marcas (carrusel)
   9. Utilidades
   ========================================================================== */

/* ---------- 1. ANIMACIÓN AL HACER SCROLL ---------- */
const observadorScroll = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      entrada.target.classList.toggle("is-visible", entrada.isIntersecting);
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);

function activarRevealEnScroll(elemento) {
  elemento.classList.add("reveal-on-scroll");
  observadorScroll.observe(elemento);
}

/* ---------- 2. DATOS DE PRODUCTOS ----------
   Para agregar un producto nuevo, copia un objeto y cambia sus valores.
   El campo "categoria" se usa también para generar los tabs de filtro.
--------------------------------------------------------------------------- */
const productos = [
  {
    id: 1,
    nombre: "TERMINALES DE EXOSTOS",
    categoria: "Premium",
    imagenes: ["img/silenciador-01-1.webp", "img/silenciador-01-2.webp"]
  },
  {
    id: 2,
    nombre: "AVEO CORTO",
    categoria: "Premium",
    imagenes: ["img/silenciador-02-1.webp", "img/silenciador-02-2.webp", "img/silenciador-02-3.webp", "img/silenciador-02-4.webp"]
  },
  {
    id: 3,
    nombre: "AVEO LARGO",
    categoria: "Premium",
    imagenes: ["img/silenciador-03-1.webp", "img/silenciador-03-2.webp", "img/silenciador-03-3.webp", "img/silenciador-03-4.webp", "img/silenciador-03-5.webp"]
  },
  {
    id: 4,
    nombre: "CORSA LARGO",
    categoria: "Premium",
    imagenes: ["img/silenciador-06-1.webp", "img/silenciador-06-2.webp", "img/silenciador-06-3.webp", "img/silenciador-06-4.webp"]
  },
  {
    id: 5,
    nombre: "MAZDA B2000",
    categoria: "Premium",
    imagenes: ["img/silenciador-04-1.webp", "img/silenciador-04-2.webp", "img/silenciador-04-3.webp", "img/silenciador-04-4.webp", "img/silenciador-04-5.webp", "img/silenciador-04-6.webp"]
  },
  {
    id: 6,
    nombre: "CORSA LARGO",
    categoria: "Premium",
    imagenes: ["img/silenciador-07-1.webp", "img/silenciador-07-2.webp", "img/silenciador-07-3.webp", "img/silenciador-07-4.webp", "img/silenciador-07-5.webp", "img/silenciador-07-6.webp", "img/silenciador-07-7.webp", "img/silenciador-07-8.webp"]
  },
  {
    id: 7,
    nombre: "CORSA EVOLUTION CORTO",
    categoria: "Premium",
    imagenes: ["img/silenciador-08-1.webp", "img/silenciador-08-2.webp", "img/silenciador-08-3.webp", "img/silenciador-08-4.webp", "img/silenciador-08-5.webp"]
  },
  {
    id: 8,
    nombre: "CORSA CORTO",
    categoria: "Premium",
    imagenes: ["img/silenciador-05-1.webp", "img/silenciador-05-2.webp", "img/silenciador-05-3.webp", "img/silenciador-05-4.webp", "img/silenciador-05-5.webp"]
  },
  {
    id: 9,
    nombre: "CORSA EVOLUTION LARGO",
    categoria: "Premium",
    imagenes: ["img/silenciador-09-1.webp", "img/silenciador-09-2.webp", "img/silenciador-09-3.webp", "img/silenciador-09-4.webp", "img/silenciador-09-5.webp", "img/silenciador-09-6.webp", "img/silenciador-09-7.webp", "img/silenciador-09-8.webp", "img/silenciador-09-9.webp"]
  },
  {
    id: 10,
    nombre: "RENAULT",
    categoria: "Premium",
    imagenes: ["img/silenciador-10-1.webp", "img/silenciador-10-2.webp", "img/silenciador-10-3.webp", "img/silenciador-10-4.webp", "img/silenciador-10-5.webp", "img/silenciador-10-6.webp"]
  },
  {
    id: 11,
    nombre: "RENAULT CLIO2",
    categoria: "Premium",
    imagenes: ["img/silenciador-11-1.webp", "img/silenciador-11-2.webp", "img/silenciador-11-3.webp", "img/silenciador-11-4.webp", "img/silenciador-11-5.webp", "img/silenciador-11-6.webp"]
  },
  {
    id: 12,
    nombre: "RENAULT SIMBOLO ",
    categoria: "Premium",
    imagenes: ["img/silenciador-12-1.webp", "img/silenciador-12-2.webp", "img/silenciador-12-3.webp", "img/silenciador-12-4.webp", "img/silenciador-12-5.webp", "img/silenciador-12-6.webp"]
  },
  {
    id: 13,
    nombre: "DIESEL C30 ",
    categoria: "Premium",
    imagenes: ["img-2/silenciador-13-1.webp", "img-2/silenciador-13-2.webp", "img-2/silenciador-13-3.webp", "img-2/silenciador-13-4.webp"]
  },
  {
    id: 14,
    nombre: "LAVAR 1600 ",
    categoria: "Premium",
    imagenes: ["img-2/silenciador-16-1.webp", "img-2/silenciador-16-2.webp", "img-2/silenciador-16-3.webp", "img-2/silenciador-16-4.webp"]
  },
  {
    id: 15,
    nombre: "UNIVERSAL GRANDE  ",
    categoria: "Premium",
    imagenes: ["img-2/silenciador-14-1.webp", "img-2/silenciador-14-3.webp", "img-2/silenciador-14-4.webp", "img-2/silenciador-14-5.webp"]
  },
  {
    id: 16,
    nombre: "JEEP GASOLINARE ",
    categoria: "Premium",
    imagenes: ["img-2/silenciador-15-1.webp", "img-2/silenciador-15-3.webp", "img-2/silenciador-15-4.webp", "img-2/silenciador-15-6.webp"]
  },
  {
    id: 17,
    nombre: "RENAULT MANAGE",
    categoria: "Premium",
    imagenes: ["img-2/silenciador-17-1.webp", "img-2/silenciador-17-2.webp", "img-2/silenciador-17-3.webp", "img-2/silenciador-17-4.webp"]
  },
  {
    id: 18,
    nombre: "Silenciador 18",
    categoria: "Sport",
    imagenes: ["img-2/silenciador-18-1.webp", "img-2/silenciador-18-2.webp", "img-2/silenciador-18-3.webp", "img-2/silenciador-18-5.webp"]
  },
  {
    id: 19,
    nombre: "CHEVROLET VITARA 3 PUERTAS",
    categoria: "Premium",
    imagenes: ["img-2/silenciador-19-2.webp", "img-2/silenciador-19-3.webp", "img-2/silenciador-19-4.webp", "img-2/silenciador-19-5.webp"]
  },
  {
    id: 20,
    nombre: "UNIVERSAL MEDIANO ",
    categoria: "Premium",
    imagenes: ["img-2/silenciador-20-1.webp", "img-2/silenciador-20-2.webp", "img-2/silenciador-20-3.webp", "img-2/silenciador-20-4.webp"]
  },
  {
    id: 21,
    nombre: "MAZDA 323 SIN GANCHO ",
    categoria: "Premium",
    imagenes: ["img-2/silenciador-21-1.webp", "img-2/silenciador-21-2.webp", "img-2/silenciador-21-3.webp", "img-2/silenciador-21-5.webp"]
  },
  {
    id: 22,
    nombre: "CHEVROLET NPR  ",
    categoria: "Premium",
    imagenes: ["img-2/silenciador-22-1.webp", "img-2/silenciador-22-2.webp", "img-2/silenciador-22-3.webp", "img-2/silenciador-22-4.webp"]
  },
  {
    id: 23,
    nombre: "SWIFT 1.3 ",
    categoria: "Premium",
    imagenes: ["img-2/silenciador-25-1.webp", "img-2/silenciador-25-2.webp", "img-2/silenciador-25-3.webp", "img-2/silenciador-25-4.webp"]
  },
  {
    id: 24,
    nombre: "CHEVROLET SPRINGS ",
    categoria: "Premium",
    imagenes: ["img-2/silenciador-24-1.webp", "img-2/silenciador-24-3.webp", "img-2/silenciador-24-4.webp", "img-2/silenciador-24-6.webp"]
  },
  {
    id: 25,
    nombre: "SPARK GT  ",
    categoria: "Premium",
    imagenes: ["img-3/silenciador-26-1.webp", "img-3/silenciador-26-2.webp", "img-3/silenciador-26-3.webp", "img-3/silenciador-26-4.webp"]
  },
  {
    id: 26,
    nombre: "RENAULT TINTO",
    categoria: "Premium",
    imagenes: ["img-3/silenciador-27-1.webp", "img-3/silenciador-27-2.webp", "img-3/silenciador-27-3.webp", "img-3/silenciador-27-5.webp"]
  },
  {
    id: 27,
    nombre: "TOYOTA 4.5",
    categoria: "Premium",
    imagenes: ["img-3/silenciador-28-1.webp", "img-3/silenciador-28-2.webp", "img-3/silenciador-28-3.webp", "img-3/silenciador-28-4.webp"]
  },
  {
    id: 28,
    nombre: "TOYOTA PRADO ",
    categoria: "Premium",
    imagenes: ["img-3/silenciador-29-1.webp", "img-3/silenciador-29-3.webp", "img-3/silenciador-29-4.webp", "img-3/silenciador-29-5.webp"]
  },
  {
    id: 29,
    nombre: "TOYOTA F140",
    categoria: "Premium",
    imagenes: ["img-3/silenciador-30-2.webp", "img-3/silenciador-30-4.webp", "img-3/silenciador-30-5.webp", "img-3/silenciador-30-6.webp"]
  },
  {
    id: 30,
    nombre: "SPARK CRONOS ",
    categoria: "Premium",
    imagenes: ["img-3/silenciador-31-1.webp", "img-3/silenciador-31-2.webp", "img-3/silenciador-31-3.webp", "img-3/silenciador-31-4.webp"]
  },
  {
    id: 31,
    nombre: "CHEVROLET OPTRA LARGO ",
    categoria: "Premium",
    imagenes: ["img-3/silenciador-32-1.webp", "img-3/silenciador-32-2.webp", "img-3/silenciador-32-3.webp", "img-3/silenciador-32-4.webp"]
  },
  {
    id: 32,
    nombre: "KIA PICANTO MIRNING",
    categoria: "Premium",
    imagenes: ["img-3/silenciador-33-1.webp", "img-3/silenciador-33-2.webp", "img-3/silenciador-33-3.webp", "img-3/silenciador-33-4.webp"]
  },
  {
    id: 33,
    nombre: "KIA PICANTO ION ",
    categoria: "Premium",
    imagenes: ["img-3/silenciador-34-1.webp", "img-3/silenciador-34-2.webp", "img-3/silenciador-34-3.webp", "img-3/silenciador-34-4.webp"]
  },
  {
    id: 34,
    nombre: "CHEVROLET SAIL LARGO ",
    categoria: "Premium",
    imagenes: ["img-3/silenciador-35-1.webp", "img-3/silenciador-35-2.webp", "img-3/silenciador-35-3.webp", "img-3/silenciador-35-4.webp"]
  },
  {
    id: 35,
    nombre: "CHEVROLET  SAIL CORTO",
    categoria: "Premium",
    imagenes: ["img-3/silenciador-36-1.webp", "img-3/silenciador-36-2.webp", "img-3/silenciador-36-3.webp", "img-3/silenciador-36-4.webp"]
  },
  {
    id: 36,
    nombre: "RENAULT SANDERO ",
    categoria: "Premium",
    imagenes: ["img-4/silenciador-37-1.webp", "img-4/silenciador-37-2.webp", "img-4/silenciador-37-3.webp", "img-4/silenciador-37-4.webp"]
  },
  {
    id: 37,
    nombre: "MONTERO HART TOP",
    categoria: "Premium",
    imagenes: ["img-4/silenciador-38-1.webp", "img-4/silenciador-38-2.webp", "img-4/silenciador-38-3.webp", "img-4/silenciador-38-4.webp"]
  },
  {
    id: 38,
    nombre: "FORD ECO SPORT",
    categoria: "Sport",
    imagenes: ["img-4/silenciador-39-1.webp", "img-4/silenciador-39-2.webp", "img-4/silenciador-39-3.webp", "img-4/silenciador-39-4.webp"]
  },
  {
    id: 39,
    nombre: "SANDERO STEPWAY ",
    categoria: "Premium",
    imagenes: ["img-4/silenciador-40-1.webp", "img-4/silenciador-40-2.webp", "img-4/silenciador-40-3.webp", "img-4/silenciador-40-5.webp"]
  },
  {
    id: 40,
    nombre: "CHEVROLET NPR",
    categoria: "Premium",
    imagenes: ["img-4/silenciador-41-1.webp", "img-4/silenciador-41-2.webp", "img-4/silenciador-41-3.webp", "img-4/silenciador-41-4.webp"]
  },
  {
    id: 41,
    nombre: "MAZDA 2 COMPLETO",
    categoria: "Sport",
    imagenes: ["img-4/silenciador-42-1.webp", "img-4/silenciador-42-2.webp", "img-4/silenciador-42-3.webp", "img-4/silenciador-42-4.webp"]
  },
  {
    id: 42,
    nombre: "HYUNDAY I35 TUCSON, KIA REVOLUCION, KIA SOPORTARE",
    categoria: "Premium",
    imagenes: ["img-4/silenciador-43-1.webp", "img-4/silenciador-43-2.webp", "img-4/silenciador-43-4.webp", "img-4/silenciador-43-5.webp"]
  },
  {
    id: 43,
    nombre: "UNIVERSAL  DE 40 REDONDO ",
    categoria: "Premium",
    imagenes: ["img-4/silenciador-44-1.webp", "img-4/silenciador-44-2.webp", "img-4/silenciador-44-4.webp", "img-4/silenciador-44-4.webp"]
  },
  {
    id: 44,
    nombre: "POS TOYOTA ",
    categoria: "Premium",
    imagenes: ["img-4/silenciador-45-1.webp", "img-4/silenciador-45-2.webp", "img-4/silenciador-45-3.webp", "img-4/silenciador-45-4.webp"]
  },
  {
    id: 45,
    nombre: "PRE SILENCIADOR AVEO",
    categoria: "Premium",
    imagenes: ["img-4/silenciador-46-1.webp", "img-4/silenciador-46-2.webp", "img-4/silenciador-46-3.webp", "img-4/silenciador-46-4.webp"]
  },
  {
    id: 46,
    nombre: "PRE SILENCIADOR CORAA, PRE SILENCIADOR SPARK CRONOS",
    categoria: "Premium",
    imagenes: ["img-4/silenciador-47-1.webp", "img-4/silenciador-47-2.webp", "img-4/silenciador-47-3.webp", "img-4/silenciador-47-4.webp"]
  },
  {
    id: 47,
    nombre: "PRE SILENCIADOR SPARK GT",
    categoria: "Premium",
    imagenes: ["img-4/silenciador-48-1.webp", "img-4/silenciador-48-2.webp", "img-4/silenciador-48-3.webp", "img-4/silenciador-48-4.webp"]
  },
  {
    id: 48,
    nombre: "PRE SILENCIADOR SUZUKI ",
    categoria: "Premium",
    imagenes: ["img-4/silenciador-49-1.webp", "img-4/silenciador-49-2.webp", "img-4/silenciador-49-3.webp", "img-4/silenciador-49-4.webp"]
  },
  {
    id: 49,
    nombre: "PRE SILENCIADOR SANDERO STEPWAY ",
    categoria: "Premium",
    imagenes: ["img-4/silenciador-50-1.webp", "img-4/silenciador-50-2.webp", "img-5/silenciador-50-3.webp", "img-5/silenciador-50-4.webp"]
  },
  {
    id: 50,
    nombre: "PRE SILENCIADOR UNIVERSAL MAZDA 323 ",
    categoria: "Premium",
    imagenes: ["img-5/silenciador-51-1.webp", "img-5/silenciador-51-2.webp", "img-5/silenciador-51-3.webp", "img-5/silenciador-51-5.webp"]
  },
  {
    id: 51,
    nombre: "PRE SILENCIADOR KIA PICANTO",
    categoria: "Premium",
    imagenes: ["img-5/silenciador-52-1.webp", "img-5/silenciador-52-2.webp", "img-5/silenciador-52-3.webp", "img-5/silenciador-52-4.webp"]
  },
  {
    id: 52,
    nombre: "PRE SILENCIADOR LOGRAN",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-53-1.webp", "img-5/silenciador-53-2.webp", "img-5/silenciador-53-3.webp", "img-5/silenciador-53-4.webp"]
  },
  {
    id: 53,
    nombre: "PRE SILENCIADOR VALA 2 1 /4",
    categoria: "Premium",
    imagenes: ["img-5/silenciador-54-1.webp", "img-5/silenciador-54-2.webp", "img-5/silenciador-54-3.webp", "img-5/silenciador-54-4.webp"]
  },
  {
    id: 54,
    nombre: "Silenciador 55",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-55-1.webp", "img-5/silenciador-55-2.webp", "img-5/silenciador-55-3.webp", "img-5/silenciador-55-4.webp"]
  },
  {
    id: 55,
    nombre: "HYUNDAY GETZ 40 cm",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-55-1.webp", "img-5/silenciador-55-2.webp", "img-5/silenciador-55-3.webp", "img-5/silenciador-55-4.webp"]
  },
  {
    id: 56,
    nombre: "FLEXIBLE 2 PULGADAS POR 8 PULGADAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-56-1.webp", "img-5/silenciador-56-2.webp", "img-5/silenciador-56-3.webp", "img-5/silenciador-56-4.webp"]
  },
  {
    id: 57,
    nombre: "FLEXIBLE 2 Y MEDIO X 6 PULGADAS",
    categoria: "Premium",
    imagenes: ["img-5/silenciador-57-1.webp", "img-5/silenciador-57-2.webp", "img-5/silenciador-57-3.webp", "img-5/silenciador-57-4.webp"]
  },
  {
    id: 58,
    nombre: "FLEXIBLE 3 X 6 PULGADAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-58-1.webp", "img-5/silenciador-58-2.webp", "img-5/silenciador-58-3.webp", "img-5/silenciador-58-4.webp"]
  },
  {
    id: 59,
    nombre: "FLEXIBLE 2 PULGAGAS X 4",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-59-1.webp", "img-5/silenciador-59-2.webp", "img-5/silenciador-59-3.webp", "img-5/silenciador-59-4.webp"]
  },
  {
    id: 60,
    nombre: "FLEXIBLE 3 X 6 PULGADAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-61-1.webp", "img-5/silenciador-61-2.webp", "img-5/silenciador-61-3.webp", "img-5/silenciador-61-4.webp"]
  },
  {
    id: 61,
    nombre: "FLEXIBLE 2/4  X 6 PULGADAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-62-1.webp", "img-5/silenciador-62-2.webp", "img-5/silenciador-62-3.webp", "img-5/silenciador-62-4.webp"]
  },
  {
    id: 62,
    nombre: "FLEXIBLE 2 X 4 PULGADAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-63-1.webp", "img-5/silenciador-63-2.webp", "img-5/silenciador-63-3.webp", "img-5/silenciador-63-4.webp"]
  },
  {
    id: 63,
    nombre: "FLEXIBLE 5 X 10 PULGADAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-64-1.webp", "img-5/silenciador-64-2.webp", "img-5/silenciador-64-3.webp", "img-5/silenciador-64-4.webp"]
  },
  {
    id: 64,
    nombre: "FLEXIBLE 4 X 10 PULGADAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-65-1.webp", "img-5/silenciador-65-2.webp", "img-5/silenciador-65-3.webp", "img-5/silenciador-65-4.webp"]
  },
  {
    id: 65,
    nombre: "SALIDA LATERAL 3,4,5 PULGADAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-66-1.webp", "img-5/silenciador-66-2.webp", "img-5/silenciador-66-3.webp", "img-5/silenciador-66-4.webp"]
  },
  {
    id: 66,
    nombre: "CHIMENEA DE 3 4,5 PULGADAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-67-1.webp", "img-5/silenciador-67-2.webp", "img-5/silenciador-67-3.webp", "img-5/silenciador-67-4.webp"]
  },
  {
    id: 67,
    nombre: "TERMINALES DE EXOSTOS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-68-1.webp", "img-5/silenciador-68-2.webp", "img-5/silenciador-68-3.webp", "img-5/silenciador-68-4.webp"]
  },
  {
    id: 68,
    nombre: "TERMINALES O PUNTERAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-69-1.webp", "img-5/silenciador-69-2.webp", "img-5/silenciador-69-3.webp", "img-5/silenciador-69-4.webp"]
  },
  {
    id: 69,
    nombre: "TERMINALES O PUNTERAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-70-1.webp", "img-5/silenciador-70-2.webp", "img-5/silenciador-70-3.webp", "img-5/silenciador-70-4.webp"]
  },
  {
    id: 70,
    nombre: "LUV 2300",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-71-1.webp", "img-5/silenciador-71-2.webp", "img-5/silenciador-71-3.webp", "img-5/silenciador-71-4.webp", "img-5/silenciador-71-5.webp"]
  },
  {
    id: 71,
    nombre: "TERMINALES O PUNTERAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-72-1.webp", "img-5/silenciador-72-2.webp", "img-5/silenciador-72-3.webp", "img-5/silenciador-72-4.webp"]
  },



  {
    id: 72,
    nombre: "TERMINALES O PUNTERAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-73-1.webp", "img-5/silenciador-73-2.webp", "img-5/silenciador-73-3.webp", "img-5/silenciador-73-4.webp"]
  },
  {
    id: 73,
    nombre: "TERMINALES O PUNTERAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-74-1.webp", "img-5/silenciador-74-2.webp", "img-5/silenciador-74-3.webp", "img-5/silenciador-74-4.webp"]
  },
  {
    id: 74,
    nombre: "TERMINALES O PUNTERAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-75-1.webp", "img-5/silenciador-75-2.webp", "img-5/silenciador-75-3.webp", "img-5/silenciador-75-4.webp"]
  },
  {
    id: 75,
    nombre: "TERMINALES O PUNTERAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-76-1.webp", "img-5/silenciador-76-2.webp", "img-5/silenciador-76-3.webp", "img-5/silenciador-76-4.webp"]
  },
  {
    id: 76,
    nombre: "TERMINALES O PUNTERAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-77-1.webp", "img-5/silenciador-77-2.webp", "img-5/silenciador-77-3.webp", "img-5/silenciador-77-4.webp"]
  },
  {
    id: 77,
    nombre: "TERMINALES O PUNTERAS",
    categoria: "Sport",
    imagenes: ["img-5/silenciador-78-1.webp", "img-5/silenciador-78-2.webp", "img-5/silenciador-78-3.webp", "img-5/silenciador-78-4.webp"]
  }
  
  
  
  
  



];

const CARRITO_STORAGE_KEY = "catalogo-cotizacion";
/* ---------- 3. CONFIGURACIÓN GENERAL ---------- */
const CONFIG = {
  whatsappNumero: "573012290989",
  moneda: "COP",
  // Pega aquí la URL de GitHub Pages una vez publiques el sitio, ej:
  // "https://tu-usuario.github.io/nombre-repo/"
  urlBase: ""
};
/* ---------- CARRITO DE COTIZACIÓN ---------- */
const carrito = new Map(); // id del producto -> producto completo
let ultimoTamanoCarrito = 0;

/** Mostrar un toast no intrusivo en pantalla (se guarda en sessionStorage para mostrarse una sola vez)
 * @param {string} mensaje
 * @param {number} duracion ms
 */
function showToast(mensaje, duracion = 5000) {
  let cont = document.getElementById('toastContainer');
  if (!cont) {
    cont = document.createElement('div');
    cont.id = 'toastContainer';
    document.body.appendChild(cont);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon"><i class="fa-brands fa-whatsapp"></i></div>
    <div class="toast-body">${mensaje}</div>
    <button class="toast-close" aria-label="Cerrar">×</button>
  `;
  cont.appendChild(toast);

  // Forzar reflow para animación
  requestAnimationFrame(() => toast.classList.add('toast--visible'));

  const timer = setTimeout(() => {
    toast.classList.remove('toast--visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, duracion);

  toast.querySelector('.toast-close').addEventListener('click', () => {
    clearTimeout(timer);
    toast.classList.remove('toast--visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  });
}

const btnAbrirCarrito = document.getElementById("btnAbrirCarrito");
const btnCarritoFloat = document.getElementById("btnCarritoFloat");
const cartOverlay = document.getElementById("cartOverlay");
const cartClose = document.getElementById("cartClose");
const cartItemsEl = document.getElementById("cartItems");
const cartEmptyEl = document.getElementById("cartEmpty");
const cartTotalEl = document.getElementById("cartTotal");
const cartWhatsappEl = document.getElementById("cartWhatsapp");
const carritoBadge = document.getElementById("carritoBadge");
const carritoBadgeFloat = document.getElementById("carritoBadgeFloat");
const modalAgregarCarrito = document.getElementById("modalAgregarCarrito");
const modalAgregarTexto = document.getElementById("modalAgregarTexto");

function estaEnCarrito(id) {
  return carrito.has(id);
}

function alternarCarrito(producto) {
  carrito.has(producto.id) ? carrito.delete(producto.id) : carrito.set(producto.id, producto);
  actualizarUICarrito();
}
/**
 * Guarda solo los IDs del carrito en localStorage (los datos completos
 * del producto se recuperan de `productos` al cargar, así siempre
 * quedan actualizados si cambias precios o descripciones).
 */
function guardarCarritoEnStorage() {
  try {
    const ids = Array.from(carrito.keys());
    localStorage.setItem(CARRITO_STORAGE_KEY, JSON.stringify(ids));
  } catch (error) {
    console.warn("No se pudo guardar la cotización:", error);
  }
}

/**
 * Al cargar la página, recupera los IDs guardados y reconstruye
 * el carrito con los datos actuales de `productos`.
 */
function cargarCarritoDesdeStorage() {
  try {
    const idsGuardados = JSON.parse(localStorage.getItem(CARRITO_STORAGE_KEY)) || [];
    idsGuardados.forEach((id) => {
      const producto = productos.find((p) => p.id === id);
      if (producto) carrito.set(id, producto);
    });
  } catch (error) {
    console.warn("No se pudo cargar la cotización guardada:", error);
  }
}

function actualizarUICarrito() {
  const total = carrito.size;

  // Si el carrito acaba de superar 1 elemento, mostrar un toast informativo una sola vez por sesión
  if (total > 1 && ultimoTamanoCarrito < 2) {
    if (!sessionStorage.getItem('avisoCarritoMostrado')) {
      showToast('Su carro tiene productos para que lo puedas cotizar');
      sessionStorage.setItem('avisoCarritoMostrado', '1');
    }
  }
  ultimoTamanoCarrito = total;

  [carritoBadge, carritoBadgeFloat].forEach((badge) => {
    badge.textContent = total;
    badge.hidden = total === 0;
  });

  document.querySelectorAll(".card-add").forEach((boton) => {
    const id = Number(boton.dataset.id);
    boton.classList.toggle("is-active", estaEnCarrito(id));
    boton.innerHTML = estaEnCarrito(id)
      ? '<i class="fa-solid fa-check"></i>'
      : '<i class="fa-solid fa-cart-plus"></i>';
    // Mostrar texto "Agregado al carro" en la tarjeta correspondiente
    const tarjeta = boton.closest('.product-card');
    if (tarjeta) {
      const textoAgregado = tarjeta.querySelector('.card-added');
      if (textoAgregado) textoAgregado.hidden = !estaEnCarrito(id);
    }
  });

  if (modalAgregarCarrito.dataset.id) {
    actualizarBotonModal(Number(modalAgregarCarrito.dataset.id));
  }

  renderizarCarrito();
  guardarCarritoEnStorage();
}

function renderizarCarrito() {
  cartItemsEl.innerHTML = "";

  if (carrito.size === 0) {
    cartEmptyEl.hidden = false;
    cartWhatsappEl.classList.add("is-disabled");
    return;
  }

  cartEmptyEl.hidden = true;
  cartWhatsappEl.classList.remove("is-disabled");

  carrito.forEach((producto) => {
    const fila = document.createElement("div");
    fila.className = "cart-item";
    fila.innerHTML = `
      <img src="${producto.imagenes[0]}" alt="${producto.nombre}">
      <div class="cart-item-info">
        <p class="cart-item-nombre"></p>
      </div>
      <button class="cart-item-quitar" aria-label="Quitar ${producto.nombre}">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;
    fila.querySelector(".cart-item-nombre").textContent = producto.nombre;
    fila.querySelector(".cart-item-quitar").addEventListener("click", () => alternarCarrito(producto));
    cartItemsEl.appendChild(fila);
  });

  cartWhatsappEl.href = construirEnlaceWhatsappCarrito();
}

function obtenerUrlBase() {
  if (CONFIG.urlBase) return CONFIG.urlBase;

  const { origin, pathname } = window.location;
  const segmentos = pathname.split('/').filter(Boolean);

  if (segmentos.length === 0) {
    return `${origin}/`;
  }

  return `${origin}/${segmentos[0]}/`;
}

function obtenerUrlImagen(path) {
  try {
    return new URL(path, obtenerUrlBase()).href;
  } catch (e) {
    return path;
  }
}

function construirEnlaceWhatsappCarrito() {
  const items = Array.from(carrito.values());
  let mensaje = "Hola, quisiera cotizar estos productos:\n\n";

  items.forEach((producto, indice) => {
    mensaje += `${indice + 1}. ${producto.nombre}\n`;
    if (producto.imagenes && producto.imagenes.length) {
      mensaje += `${obtenerUrlImagen(producto.imagenes[0])}\n`;
    }
    mensaje += `\n`;
  });

  return `https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent(mensaje)}`;
}

function actualizarBotonModal(id) {
  const enCarrito = estaEnCarrito(id);
  modalAgregarCarrito.classList.toggle("is-en-carrito", enCarrito);
  modalAgregarTexto.textContent = enCarrito ? "Quitar de la cotización" : "Agregar a cotización";
}

function abrirCarrito() {
  cartOverlay.classList.add("is-open");
  cartOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function cerrarCarrito() {
  cartOverlay.classList.remove("is-open");
  cartOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

btnAbrirCarrito.addEventListener("click", abrirCarrito);
btnCarritoFloat.addEventListener("click", abrirCarrito);
cartClose.addEventListener("click", cerrarCarrito);
cartOverlay.addEventListener("click", (evento) => {
  if (evento.target === cartOverlay) cerrarCarrito();
});
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && cartOverlay.classList.contains("is-open")) cerrarCarrito();
});
/* ---------- 4. RENDER DEL GRID DE PRODUCTOS + TABS DE CATEGORÍA ---------- */
const grid = document.getElementById("productGrid");
const estadoVacio = document.getElementById("estadoVacio");
const contadorResultados = document.getElementById("contadorResultados");
const totalProductosEl = document.getElementById("totalProductos");
const paginacionEl = document.getElementById("paginacion");
const categoryTabsEl = document.getElementById("categoryTabs");

const PRODUCTOS_POR_PAGINA = 8;
let paginaActual = 1;
let categoriaActiva = "Todos";
let listaFiltradaActual = productos;

function formatearPrecio(valor) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: CONFIG.moneda,
    maximumFractionDigits: 0
  }).format(valor);
}

function construirEnlaceWhatsapp(producto) {
  let mensaje = `Hola, quisiera consultar disponibilidad de: ${producto.nombre}`;
  if (producto.imagenes && producto.imagenes.length) {
    mensaje += `\n${obtenerUrlImagen(producto.imagenes[0])}`;
  }
  return `https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent(mensaje)}`;
}

function crearTarjeta(producto) {
  const card = document.createElement("article");
  card.className = "product-card";
  

  const categoriaClase = producto.categoria.toLowerCase().replace(/\s+/g, "-");

  card.innerHTML = `
    <div class="card-media" data-id="${producto.id}">
      <span class="card-tag card-tag--${categoriaClase}">${producto.categoria}</span>
      <img src="${producto.imagenes[0]}" alt="${producto.nombre}" loading="lazy">
    </div>
    <div class="card-body">
      <h3 class="card-title">${producto.nombre}</h3>
      <div class="card-added" hidden>Agregado al carro</div>
      <p class="card-desc"></p>
      <div class="card-footer">
        <a class="card-contact" href="${construirEnlaceWhatsapp(producto)}" target="_blank" rel="noopener" aria-label="Consultar ${producto.nombre} por WhatsApp">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <button class="card-contact card-add" type="button" data-id="${producto.id}" aria-label="Agregar ${producto.nombre} a la cotización">
          <i class="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </div>
  `;

  card.querySelector(".card-desc").textContent = producto.descripcion;
  card.querySelector(".card-media").addEventListener("click", () => abrirModal(producto));
  const botonAgregar = card.querySelector(".card-add");
  if (estaEnCarrito(producto.id)) {
    botonAgregar.classList.add("is-active");
    botonAgregar.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  botonAgregar.addEventListener("click", () => alternarCarrito(producto));

  return card;
}

/**
 * Genera los botones de categoría ("Todos" + cada categoría única presente
 * en los productos) y los pinta una sola vez al cargar la página.
 */
function renderizarTabsCategoria() {
  const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))];

  categoryTabsEl.innerHTML = "";
  categorias.forEach((categoria) => {
    const btn = document.createElement("button");
    btn.className = "category-tab";
    btn.type = "button";
    btn.textContent = categoria;
    btn.setAttribute("role", "tab");
    if (categoria === categoriaActiva) btn.classList.add("is-active");

    btn.addEventListener("click", () => {
      categoriaActiva = categoria;
      paginaActual = 1;
      document.querySelectorAll(".category-tab").forEach((tab) => tab.classList.remove("is-active"));
      btn.classList.add("is-active");
      aplicarFiltros();
    });

    categoryTabsEl.appendChild(btn);
  });
}

/**
 * Combina el texto del buscador con la categoría activa y vuelve a renderizar.
 */
function aplicarFiltros() {
  const termino = inputBuscador.value.trim().toLowerCase();

  const filtrados = productos.filter((producto) => {
    const coincideTexto =
      producto.nombre.toLowerCase().includes(termino) ||
      producto.categoria.toLowerCase().includes(termino);
    const coincideCategoria = categoriaActiva === "Todos" || producto.categoria === categoriaActiva;
    return coincideTexto && coincideCategoria;
  });

  renderizarProductos(filtrados);
}

function renderizarProductos(lista) {
  listaFiltradaActual = lista;

  const totalPaginas = Math.max(1, Math.ceil(lista.length / PRODUCTOS_POR_PAGINA));
  if (paginaActual > totalPaginas) paginaActual = totalPaginas;

  const inicio = (paginaActual - 1) * PRODUCTOS_POR_PAGINA;
  const listaPagina = lista.slice(inicio, inicio + PRODUCTOS_POR_PAGINA);

  grid.innerHTML = "";

  if (lista.length === 0) {
    estadoVacio.hidden = false;
  } else {
    estadoVacio.hidden = true;
    listaPagina.forEach((producto) => {
      const tarjeta = crearTarjeta(producto);
      grid.appendChild(tarjeta);
      activarRevealEnScroll(tarjeta);
    });
  }

  if (lista.length === 0) {
    contadorResultados.textContent = "";
  } else {
    contadorResultados.textContent = `${lista.length} de ${productos.length} productos`;
  }

  renderizarPaginacion(totalPaginas);
}

/* ---------- 5. PAGINACIÓN ---------- */
function renderizarPaginacion(totalPaginas) {
  paginacionEl.innerHTML = "";
  if (totalPaginas <= 1) return;

  const irAPagina = (numero) => {
    paginaActual = numero;
    renderizarProductos(listaFiltradaActual);
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const btnAnterior = document.createElement("button");
  btnAnterior.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  btnAnterior.setAttribute("aria-label", "Página anterior");
  btnAnterior.disabled = paginaActual === 1;
  btnAnterior.addEventListener("click", () => irAPagina(paginaActual - 1));
  paginacionEl.appendChild(btnAnterior);

  const agregarBotonNumero = (numero) => {
    const btn = document.createElement("button");
    btn.textContent = numero;
    if (numero === paginaActual) btn.classList.add("is-active");
    btn.addEventListener("click", () => irAPagina(numero));
    paginacionEl.appendChild(btn);
  };

  const agregarPuntos = () => {
    const span = document.createElement("span");
    span.className = "pagination-dots";
    span.textContent = "…";
    paginacionEl.appendChild(span);
  };

  calcularRangoPaginas(paginaActual, totalPaginas).forEach((item) => {
    item === "..." ? agregarPuntos() : agregarBotonNumero(item);
  });

  const btnSiguiente = document.createElement("button");
  btnSiguiente.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
  btnSiguiente.setAttribute("aria-label", "Página siguiente");
  btnSiguiente.disabled = paginaActual === totalPaginas;
  btnSiguiente.addEventListener("click", () => irAPagina(paginaActual + 1));
  paginacionEl.appendChild(btnSiguiente);
}

function calcularRangoPaginas(actual, total) {
  const VENTANA = 1;
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const paginas = new Set([1, total, actual]);
  for (let i = actual - VENTANA; i <= actual + VENTANA; i++) {
    if (i > 1 && i < total) paginas.add(i);
  }

  const ordenadas = Array.from(paginas).sort((a, b) => a - b);
  const resultado = [];
  ordenadas.forEach((numero, indice) => {
    if (indice > 0 && numero - ordenadas[indice - 1] > 1) resultado.push("...");
    resultado.push(numero);
  });

  return resultado;
}

/* ---------- 6. BUSCADOR EN TIEMPO REAL ---------- */
const inputBuscador = document.getElementById("buscador");

inputBuscador.addEventListener("input", () => {
  paginaActual = 1;
  aplicarFiltros();
});

/* ---------- 7. MODAL DE PRODUCTO ---------- */
const modalOverlay = document.getElementById("modalOverlay");
const modalImagen = document.getElementById("modalImagen");
const modalCategoria = document.getElementById("modalCategoria");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalWhatsapp = document.getElementById("modalWhatsapp");
const modalClose = document.getElementById("modalClose");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");
const modalContador = document.getElementById("modalContador");
const modalThumbs = document.getElementById("modalThumbs");

let galeriaActual = [];
let indiceGaleriaActual = 0;

function mostrarFotoGaleria(indice) {
  indiceGaleriaActual = indice;
  modalImagen.src = galeriaActual[indice];

  const hayVarias = galeriaActual.length > 1;
  modalPrev.hidden = !hayVarias;
  modalNext.hidden = !hayVarias;
  modalThumbs.hidden = !hayVarias;
  modalContador.hidden = !hayVarias;

  if (hayVarias) {
    modalContador.textContent = `${indice + 1} / ${galeriaActual.length}`;
    modalThumbs.querySelectorAll(".modal-thumb").forEach((thumb, i) => {
      thumb.classList.toggle("is-active", i === indice);
    });
  }
}

function abrirModal(producto) {
  galeriaActual = producto.imagenes;

  modalThumbs.innerHTML = "";
  galeriaActual.forEach((src, i) => {
    const thumb = document.createElement("button");
    thumb.className = "modal-thumb";
    thumb.type = "button";
    thumb.innerHTML = `<img src="${src}" alt="Foto ${i + 1}">`;
    thumb.addEventListener("click", () => mostrarFotoGaleria(i));
    modalThumbs.appendChild(thumb);
  });

  mostrarFotoGaleria(0);

  modalImagen.alt = producto.nombre;
  modalCategoria.textContent = producto.categoria;
  modalTitulo.textContent = producto.nombre;
  modalDescripcion.textContent = producto.descripcion;
  modalAgregarCarrito.dataset.id = producto.id;
  modalAgregarCarrito.onclick = () => alternarCarrito(producto);
  actualizarBotonModal(producto.id);

  modalOverlay.classList.add("is-open");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  modalOverlay.classList.remove("is-open");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function fotoAnterior() {
  const nuevoIndice = (indiceGaleriaActual - 1 + galeriaActual.length) % galeriaActual.length;
  mostrarFotoGaleria(nuevoIndice);
}

function fotoSiguiente() {
  const nuevoIndice = (indiceGaleriaActual + 1) % galeriaActual.length;
  mostrarFotoGaleria(nuevoIndice);
}

modalPrev.addEventListener("click", fotoAnterior);
modalNext.addEventListener("click", fotoSiguiente);
modalClose.addEventListener("click", cerrarModal);

modalOverlay.addEventListener("click", (evento) => {
  if (evento.target === modalOverlay) cerrarModal();
});

document.addEventListener("keydown", (evento) => {
  if (!modalOverlay.classList.contains("is-open")) return;
  if (evento.key === "Escape") cerrarModal();
  if (evento.key === "ArrowLeft") fotoAnterior();
  if (evento.key === "ArrowRight") fotoSiguiente();
});

/* ---------- 8. MARCAS (CARRUSEL) ---------- */
// Nombres en texto (no logos oficiales, para no sugerir afiliación con las marcas)
const marcas = ["Kia", "Ford", "Chevrolet", "Mazda", "Renault", "Toyota", "Hyundai", "Nissan"];
const marcasTrack = document.getElementById("marcasTrack");

function crearChipMarca(nombre) {
  const chip = document.createElement("div");
  chip.className = "marca-chip";
  chip.innerHTML = `<i class="fa-solid fa-car-side"></i><span></span>`;
  chip.querySelector("span").textContent = nombre;
  return chip;
}

// Se duplica la lista para lograr un scroll infinito sin cortes
[...marcas, ...marcas].forEach((nombre) => {
  marcasTrack.appendChild(crearChipMarca(nombre));
});

/* ---------- 9. UTILIDADES ---------- */
document.getElementById("anioActual").textContent = new Date().getFullYear();
totalProductosEl.textContent = String(productos.length).padStart(2, "0");

// Recupera la cotización guardada (si existe) antes del primer render
cargarCarritoDesdeStorage();
actualizarUICarrito();

// Primer render
renderizarTabsCategoria();
renderizarProductos(productos);

// Animación de scroll en los encabezados de sección
document.querySelectorAll(".section-heading").forEach(activarRevealEnScroll);
