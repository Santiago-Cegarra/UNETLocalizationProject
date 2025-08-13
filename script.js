// UNET — Edificio C
// Mapa de ubicaciones normalizado para tu app (JS)
// Notas de normalización:
// 1) Usamos los pisos: "Sótano", "Planta Baja", "Piso 1", "Piso 2", "Piso 3".
//    Los sectores A/B se mantienen en el campo `location`.
// 2) Categorías estandarizadas: "Administrativo", "Académico", "Laboratorios", "Servicios", "Eventos".
// 3) Rutas de imágenes con prefijo "images/". Usa nombres reales de tus assets si difieren.
// 4) Evitamos duplicados; donde hay dos puertas del mismo lugar se crean entradas separadas.

const locations = [
  // === Entradas originales (algunas ajustadas) ===
  {
    id: 1,
    name: "Decanato de Docencia",
    description: "Oficinas administrativas y coordinación de laboratorios y proyectos.",
    location: "Piso 2, sector A (11-C-4).",
    category: "Administrativo",
    floor: "Piso 2",
    image: "images/Piso 2/11c4decanatoDocencialabproyectos.jpg"
  },
  {
    id: 2,
    name: "Sede Informática (Puerta 1)",
    description: "Sede principal para estudio individual y grupal de Informática.",
    location: "Piso 3, sector B. Puerta principal (12-D-20).",
    category: "Académico",
    floor: "Piso 3",
    image: "images/Piso 3/Aula08CSedeInformatica1.jpg"
  },
  {
    id: 3,
    name: "Laboratorios de Computación Valerio Wong (12-A-4)",
    description: "Complejo de laboratorios con computadoras para clases de informática y programación.",
    location: "Planta Baja, sector A (12-A-4).",
    category: "Laboratorios",
    floor: "Planta Baja",
    image: "images/PlantaBaja/labValerioWong.jpg"
  },
  {
    id: 4,
    name: "Lobby Sótano",
    description: "Área de estudio y zona de descanso del nivel sótano.",
    location: "Bajando desde PB por las escaleras normales de la izquierda.",
    category: "Servicios",
    floor: "Sótano",
    image: "images/Sotano/lobbySotano.jpg"
  },
  {
    id: 5,
    name: "Decanato de Postgrado",
    description: "Área administrativa y de reuniones de postgrado.",
    location: "Piso 3, sector A (11-D-1).",
    category: "Eventos",
    floor: "Piso 3",
    image: "images/Piso 3/DecanatoPost.jpg"
  },
  {
    id: 6,
    name: "Cafetín",
    description: "Punto de compra de bebidas y comida para estudiantes.",
    location: "Piso 2, zona central entre sectores A y B.",
    category: "Servicios",
    floor: "Piso 2",
    image: "images/Piso 2/cafetin.jpg"
  },
  {
    id: 7,
    name: "Conserjería (12-D-1)",
    description: "Equipo de conserjería; apoyo, seguridad y mantenimiento.",
    location: "Piso 3, sector B (12-D-1).",
    category: "Servicios",
    floor: "Piso 3",
    image: "images/Piso 3/12d1Conserjeria.jpg"
  },
  {
    id: 8,
    name: "Baños de Hombres (Piso 3)",
    description: "Baño principal del piso 3 (hombres).",
    location: "Piso 3, sector B (12-D-17).",
    category: "Servicios",
    floor: "Piso 3",
    image: "images/Piso 3/12d17bathmen.jpg"
  },
  {
    id: 9,
    name: "Baños de Mujeres (Piso 3)",
    description: "Baño principal del piso 3 (mujeres).",
    location: "Piso 3, sector B (12-D-19).",
    category: "Servicios",
    floor: "Piso 3",
    image: "images/Piso 3/12d19bathW.jpg"
  },
  {
    id: 10,
    name: "Laboratorio de Fitopatología (12-D-15)",
    description: "Laboratorio especializado en fitopatología.",
    location: "Piso 3, sector B (12-D-15).",
    category: "Laboratorios",
    floor: "Piso 3",
    image: "images/Piso 3/12d15 .jpg"
  },
  {
    id: 11,
    name: "Biotecnología (Biofertilizantes) (12-D-12)",
    description: "Laboratorio de biotecnología orientado a biofertilizantes.",
    location: "Piso 3, ir al sector B (12-D-12).",
    category: "Laboratorios",
    floor: "Piso 3",
    image: "images/Piso 3/12d12lab.jpg"
  },
  
  {
    id: 12,
    name: "Laboratorio de Microbiología (12-D-11)",
    description: "Laboratorio para estudios de microbiología.",
    location: "Piso 3, sector B (12-D-11).",
    category: "Laboratorios",
    floor: "Piso 3",
    image: "images/Piso 3/12d11labmicro.jpg"
  },
  {
    id: 13,
    name: "Laboratorio de Biofertilizantes (12-D-7)",
    description: "Laboratorio centrado en biofertilizantes.",
    location: "Piso 3, sector B (12-D-7).",
    category: "Laboratorios",
    floor: "Piso 3",
    image: "images/Piso 3/12d7fertilizantes.jpg"
  },
  {
    id: 14,
    name: "Lab. Inv. en Cs. Básicas e Ingeniería (12-D-6)",
    description: "Investigación en ciencias básicas e ingeniería.",
    location: "Piso 3, sector B (12-D-6).",
    category: "Laboratorios",
    floor: "Piso 3",
    image: "images/Piso 3/12d6.jpg"
  },
  {
    id: 15,
    name: "Biotecnología (Cultivo de Tejidos) (12-D-5)",
    description: "Laboratorio de biotecnología, Area de cultivo de tejidos.",
    location: "Piso 3, sector B (12-D-5).",
    category: "Laboratorios",
    floor: "Piso 3",
    image: "images/Piso 3/12d5lab.jpg"
  },
  {
    id: 16,
    name: "Laboratorio de Fisiología Vegetal (12-D-3)",
    description: "Laboratorio de fisiología vegetal.",
    location: "Piso 3, sector B (12-D-3).",
    category: "Laboratorios",
    floor: "Piso 3",
    image: "images/Piso 3/12d3.jpg"
  },
  {
    id: 17,
    name: "Salón 09C (12-D-28)",
    description: "Aula académica para distintas asignaturas.",
    location: "Piso 3, sector B (12-D-28).",
    category: "Académico",
    floor: "Piso 3",
    image: "images/Piso 3/12d28Aula09C.jpg"
  },
  {
    id: 18,
    name: "Sede Informática (Puerta 2)",
    description: "Ambiente de estudio y trabajo académico.",
    location: "Piso 3, sector B (12-D-21).",
    category: "Académico",
    floor: "Piso 3",
    image: "images/Piso 3/12d21Sede2.jpg"
  },
  {
    id: 19,
    name: "Salón 12-D-2",
    description: "Aula académica para varias materias.",
    location: "Piso 3, sector B (12-D-2).",
    category: "Académico",
    floor: "Piso 3",
    image: "images/Piso 3/12d2.jpg"
  },
  
  
  // === Adiciones completas por piso ===
  // --- PLANTA BAJA ---
  {
    id: 20,
    name: "Lobby Planta Baja",
    description: "Punto de atención y referencia al ingresar al edificio.",
    location: "Entrada principal, áreas de recepción.",
    category: "Servicios",
    floor: "Planta Baja",
    image: "images/PlantaBaja/lobbyPB.jpg"
  },
  {
    id: 21,
    name: "12-A-9 Lab. Inv. Arq. - Ciudad y Territorio",
    description: "Laboratorio de investigación arquitectónica (ciudad y territorio).",
    location: "Planta Baja, sector A (12-A-9).",
    category: "Laboratorios",
    floor: "Planta Baja",
    image: "images/PlantaBaja/12a9labArquitectonica.jpg"
  },
  {
    id: 22,
    name: "12-A-8 Baños de Damas (PB)",
    description: "Baños de damas de planta baja.",
    location: "Planta Baja, sector A (12-A-8).",
    category: "Servicios",
    floor: "Planta Baja",
    image: "images/PlantaBaja/12A8bathW.jpg"
  },
  {
    id: 23,
    name: "12-A-7 Baños de Hombres (PB)",
    description: "Baños de hombres de planta baja.",
    location: "Planta Baja, sector A (12-A-7).",
    category: "Servicios",
    floor: "Planta Baja",
    image: "images/PlantaBaja/12a7bathH.jpg"
  },
  {
    id: 24,
    name: "Sala de Exposiciones (12-A-10)",
    description: "Sala de exposiciones del Decanato de Investigación.",
    location: "Planta Baja, sector A (12-A-10).",
    category: "Académico",
    floor: "Planta Baja",
    image: "images/PlantaBaja/salaExpoPB.jpg"
  },
  {
    id: 25,
    name: "12-A-11 Lab. Inv. Arq. - Ambiente y Ecotec.",
    description: "Laboratorio de investigación arquitectónica (ambiente y ecotecnología).",
    location: "Planta Baja, sector A (12-A-11).",
    category: "Laboratorios",
    floor: "Planta Baja",
    image: "images/PlantaBaja/12a9labArquitectonica.jpg"
  },
  {
    id: 26,
    name: "Departamento de Informática (Puerta principal)",
    description: "Acceso principal al Departamento de Informática.",
    location: "Planta Baja, frente a los laboratorios de computación.",
    category: "Académico",
    floor: "Planta Baja",
    image: "images/PlantaBaja/decanato.test.jpg"
  },
  {
    id: 27,
    name: "Departamento de Informática (Segunda puerta)",
    description: "Acceso secundario al Departamento de Informática.",
    location: "Planta Baja, adyacente al pasillo central.",
    category: "Académico",
    floor: "Planta Baja",
    image: "images//PlantaBaja/depInf2.jpg"
  },

  // --- SÓTANO ---
  {
    id: 28,
    name: "11-A-14 Transferencia de Calor (Puerta 1)",
    description: "Laboratorio de transferencia de calor (puerta 1).",
    location: "Sótano, sector A (11-A-14).",
    category: "Laboratorios",
    floor: "Sótano",
    image: "images/Sotano/11a14LabTransfCalor.jpg"
  },
  {
    id: 29,
    name: "11-A-9 Laboratorio de Materiales",
    description: "Laboratorio de materiales.",
    location: "Sótano, sector A (11-A-9).",
    category: "Laboratorios",
    floor: "Sótano",
    image: "images/Sotano/11a9LabMateriales.jpg"
  },
  {
    id: 30,
    name: "11-A-13 Transferencia de Calor (Puerta 2)",
    description: "Laboratorio de transferencia de calor (puerta 2).",
    location: "Sótano, sector A (11-A-13).",
    category: "Laboratorios",
    floor: "Sótano",
    image: "images/Sotano/11a13.jpg"
  },
  {
    id: 31,
    name: "11-A-10 Laboratorio de Prototipos",
    description: "Laboratorio de prototipos.",
    location: "Sótano, sector A (11-A-10).",
    category: "Laboratorios",
    floor: "Sótano",
    image: "images/Sotano/11a10labPrototipos.jpg"
  },
  {
    id: 32,
    name: "11-A-12 Sección Taller",
    description: "Sección de talleres del sótano.",
    location: "Sótano, sector A (11-A-12).",
    category: "Académico",
    floor: "Sótano",
    image: "images/Sotano/11a12seccionTaller.jpg"
  },
  {
    id: 33,
    name: "11-A-16 Laboratorio de Matemática",
    description: "Laboratorio de apoyo a Matemática.",
    location: "Sótano, sector A (11-A-16).",
    category: "Laboratorios",
    floor: "Sótano",
    image: "images/Sotano/11a16labMatematica.jpg"
  },
  {
    id: 34,
    name: "11-A-1 Sanitario de Hombres (Sótano)",
    description: "Baños de hombres del sótano.",
    location: "Sótano, sector A (11-A-1).",
    category: "Servicios",
    floor: "Sótano",
    image: "images/Sotano/bathHombres.jpg"
  },
  {
    id: 36,
    name: "11-A-3 Sanitario de Damas (Sótano)",
    description: "Baños de damas del sótano.",
    location: "Sótano, sector A (11-A-3).",
    category: "Servicios",
    floor: "Sótano",
    image: "images/Sotano/bathMujeres.jpg"
  },
  {
    id: 37,
    name: "11-A-4 Simulación en Termofluidos",
    description: "Laboratorio de simulación de computación aplicada a termofluidos.",
    location: "Sótano, sector A (11-A-4).",
    category: "Laboratorios",
    floor: "Sótano",
    image: "images/Sotano/labSimulacionComputacionFluidos.jpg"
  },
  {
    id: 38,
    name: "11-A-5 Mecánica de Fluidos",
    description: "Laboratorio de mecánica de fluidos.",
    location: "Sótano, sector A (11-A-5).",
    category: "Laboratorios",
    floor: "Sótano",
    image: "images/Sotano/labMecanicaFluidos.jpg"
  },

  // --- PISO 1 (sector A) ---
  {
    id: 39,
    name: "11-B-9 Electrotecnia 2 y Fund. Ing. Electrónica",
    description: "Laboratorio de electrotecnia 2 y fundamentos de electrónica.",
    location: "Piso 1, sector A (11-B-9).",
    category: "Laboratorios",
    floor: "Piso 1",
    image: "images/Piso 1/11b9labElectronica2.jpg"
  },
  {
    id: 40,
    name: "11-B-12 Laboratorio 126",
    description: "Laboratorio 126.",
    location: "Piso 1, sector A (11-B-12).",
    category: "Laboratorios",
    floor: "Piso 1",
    image: "images/Piso 1/11b12lab126.jpg"
  },
  {
    id: 41,
    name: "11-B-15",
    description: "Aula/Laboratorio identificado como 11-B-15.",
    location: "Piso 1, sector A (11-B-15).",
    category: "Académico",
    floor: "Piso 1",
    image: "images/Piso 1/11b15.jpg"
  },
  {
    id: 42,
    name: "11-B-16 Laboratorio 127",
    description: "Laboratorio 127.",
    location: "Piso 1, sector A (11-B-16).",
    category: "Laboratorios",
    floor: "Piso 1",
    image: "images/Piso 1/11b16lab127.jpg"
  },
  {
    id: 43,
    name: "11-B-11 Laboratorio 133",
    description: "Laboratorio 133.",
    location: "Piso 1, sector A (11-B-11).",
    category: "Laboratorios",
    floor: "Piso 1",
    image: "images/Piso 1/11b11lab133.jpg"
  },
  {
    id: 44,
    name: "11-B-10 Laboratorio 125",
    description: "Laboratorio 125.",
    location: "Piso 1, sector A (11-B-10).",
    category: "Laboratorios",
    floor: "Piso 1",
    image: "images/Piso 1/11b10lab125.jpg"
  },
  {
    id: 45,
    name: "11-B-17 PROFEI (Electrónica Industrial)",
    description: "Programa de Formación en Electrónica Industrial.",
    location: "Piso 1, sector A (11-B-17).",
    category: "Académico",
    floor: "Piso 1",
    image: "images/Piso 1/profei.jpg"
  },
  {
    id: 46,
    name: "11-B-6 Lab. 063 Electrotecnia 1",
    description: "Laboratorio 063 de electrotecnia 1.",
    location: "Piso 1, sector A (11-B-6).",
    category: "Laboratorios",
    floor: "Piso 1",
    image: "images/Piso 1/11b6lab063Electrotecnia1.jpg"
  },
  {
    id: 47,
    name: "11-B-4 Sala de Técnicos",
    description: "Sala del personal técnico.",
    location: "Piso 1, sector A (11-B-4).",
    category: "Servicios",
    floor: "Piso 1",
    image: "images/Piso 1/11b4saladeTecnicos.jpg"
  },
  {
    id: 48,
    name: "11-B-3 Sanitario de Damas (P1A)",
    description: "Baños de damas del piso 1 (sector A).",
    location: "Piso 1, sector A (11-B-3).",
    category: "Servicios",
    floor: "Piso 1",
    image: "images/Piso 1/11b3bathW.jpg"
  },
  {
    id: 49,
    name: "11-B-2 Cuarto de Limpieza (P1A)",
    description: "Cuarto de limpieza del piso 1 (sector A).",
    location: "Piso 1, sector A (11-B-2).",
    category: "Servicios",
    floor: "Piso 1",
    image: "images/Piso 1/11b2salaLimpieza.jpg"
  },
  {
    id: 50,
    name: "11-B-1 Sanitario de Hombres (P1A)",
    description: "Baños de hombres del piso 1 (sector A).",
    location: "Piso 1, sector A (11-B-1).",
    category: "Servicios",
    floor: "Piso 1",
    image: "images/Piso 1/11b1bathMen.jpg"
  },
  {
    id: 51,
    name: "11-B-7",
    description: "Aula/Laboratorio identificado como 11-B-7.",
    location: "Piso 1, sector A (11-B-7).",
    category: "Académico",
    floor: "Piso 1",
    image: "images/Piso 1/11b7.jpg"
  },
  {
    id: 52,
    name: "11-B-8 Laboratorio 082",
    description: "Laboratorio 082.",
    location: "Piso 1, sector A (11-B-8).",
    category: "Laboratorios",
    floor: "Piso 1",
    image: "images/Piso 1/11b8lab082.jpg"
  },

  // --- PISO 1 (sector B) ---
  {
    id: 53,
    name: "12-B-1 Laboratorio de Arquitectura",
    description: "Laboratorio de arquitectura.",
    location: "Piso 1, sector B (12-B-1).",
    category: "Laboratorios",
    floor: "Piso 1",
    image: "images/Piso 1/lab12b1Arquitectura.jpg"
  },
  {
    id: 54,
    name: "12-B-15 Aula 114 / Taller 12-B-3 (Puerta 1)",
    description: "Acceso 1 del Taller (Aula 114).",
    location: "Piso 1, sector B (12-B-15).",
    category: "Académico",
    floor: "Piso 1",
    image: "images/Piso 1/12b3Taller.jpg"
  },
  {
    id: 55,
    name: "12-B-11 Salón Japonés",
    description: "Espacio académico denominado 'Salón Japonés'.",
    location: "Piso 1, sector B (12-B-11).",
    category: "Académico",
    floor: "Piso 1",
    image: "images/Piso 1/12b11Salonjapones.jpg"
  },
  {
    id: 56,
    name: "12-B-16 Aula 114 / Taller 12-B-3 (Puerta 2)",
    description: "Acceso 2 del Taller (Aula 114).",
    location: "Piso 1, sector B (12-B-16).",
    category: "Académico",
    floor: "Piso 1",
    image: "images/Piso 1/12b16Aula114.jpg"
  },
  {
    id: 57,
    name: "12-B-17 Lab. Inv. y Desarrollo en Informática",
    description: "Laboratorio de investigación y desarrollo en informática.",
    location: "Piso 1, sector B (12-B-17).",
    category: "Laboratorios",
    floor: "Piso 1",
    image: "images/Piso 1/12b7LabInvestigacionInf.jpg"
  },
  {
    id: 58,
    name: "12-B-10",
    description: "Aula/Laboratorio identificado como 12-B-10.",
    location: "Piso 1, sector B (12-B-10).",
    category: "Académico",
    floor: "Piso 1",
    image: "images/Piso 1/12b10.jpg"
  },
  {
    id: 59,
    name: "12-B-9 Diseño Mecánico",
    description: "Área de diseño mecánico.",
    location: "Piso 1, sector B (12-B-9).",
    category: "Académico",
    floor: "Piso 1",
    image: "images/Piso 1/12b9DisenoMecanico.jpg"
  },
  {
    id: 60,
    name: "12-B-8 Sanitario de Damas (P1B)",
    description: "Baños de damas del piso 1 (sector B).",
    location: "Piso 1, sector B (12-B-8).",
    category: "Servicios",
    floor: "Piso 1",
    image: "images/Piso 1/12b8BathW.jpg"
  },
  {
    id: 61,
    name: "12-B-7 Cuarto de Limpieza (P1B)",
    description: "Cuarto de limpieza del piso 1 (sector B).",
    location: "Piso 1, sector B (12-B-7).",
    category: "Servicios",
    floor: "Piso 1",
    image: "images/Piso 1/12b7.jpg"
  },
  {
    id: 62,
    name: "12-B-6 Sanitario de Hombres (P1B)",
    description: "Baños de hombres del piso 1 (sector B).",
    location: "Piso 1, sector B (12-B-6).",
    category: "Servicios",
    floor: "Piso 1",
    image: "images/Piso 1/12b6BathMen.jpg"
  },
  {
    id: 63,
    name: "12-B-3",
    description: "Aula/Laboratorio identificado como 12-B-3 (Taller).",
    location: "Piso 1, sector B (12-B-3).",
    category: "Académico",
    floor: "Piso 1",
    image: "images/Piso 1/12b3.jpg"
  },
  {
    id: 64,
    name: "12-B-2 Conserjería (P1B)",
    description: "Conserjería del sector B (piso 1).",
    location: "Piso 1, sector B (12-B-2).",
    category: "Servicios",
    floor: "Piso 1",
    image: "images/Piso 1/12B2Conserjeria.jpg"
  },

  // --- PISO 2 (sector A) ---
  // (id 1 ya cubre Decanato de Docencia 11-C-4)
  {
    id: 65,
    name: "11-C-6 Aula 16C",
    description: "Aula 16C.",
    location: "Piso 2, sector A (11-C-6).",
    category: "Académico",
    floor: "Piso 2",
    image: "images/Piso 2/11c6Aula16C.jpg"
  },
  {
    id: 66,
    name: "11-C-3 Sanitario de Damas (P2A)",
    description: "Baños de damas del piso 2 (sector A).",
    location: "Piso 2, sector A (11-C-3).",
    category: "Servicios",
    floor: "Piso 2",
    image: "images/Piso 2/11c3.jpg"
  },
  {
    id: 67,
    name: "11-C-2 Cuarto de Limpieza (P2A)",
    description: "Cuarto de limpieza del piso 2 (sector A).",
    location: "Piso 2, sector A (11-C-2).",
    category: "Servicios",
    floor: "Piso 2",
    image: "images/Piso 2/11c2.jpg"
  },
  {
    id: 68,
    name: "11-C-1 Sanitario de Hombres (P2A)",
    description: "Baños de hombres del piso 2 (sector A).",
    location: "Piso 2, sector A (11-C-1).",
    category: "Servicios",
    floor: "Piso 2",
    image: "images/Piso 2/11c1Bathmen.jpg"
  },
  {
    id: 69,
    name: "11-C-7 Aula 15C",
    description: "Aula 15C.",
    location: "Piso 2, sector A (11-C-7).",
    category: "Académico",
    floor: "Piso 2",
    image: "images/Piso 2/11c7Aula015C.jpg"
  },
  {
    id: 70,
    name: "11-C-17 Lab. RF y Microondas",
    description: "Laboratorio de radiofrecuencia y microondas.",
    location: "Piso 2, sector A (11-C-17).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab11c17RFmicroondas.jpg"
  },
  {
    id: 71,
    name: "11-C-16 Lab. 124 Sistemas Digitales",
    description: "Laboratorio 124 de sistemas digitales.",
    location: "Piso 2, sector A (11-C-16).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab11c16Sistemasdigitales.jpg"
  },
  {
    id: 72,
    name: "11-C-15 Laboratorio de Microprocesadores",
    description: "Laboratorio de microprocesadores.",
    location: "Piso 2, sector A (11-C-15).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab11c15Microprocesadores.jpg"
  },
  {
    id: 73,
    name: "11-C-14 Laboratorio 131",
    description: "Laboratorio 131.",
    location: "Piso 2, sector A (11-C-14).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab11c14-131.jpg"
  },
  {
    id: 74,
    name: "11-C-12 Lab. 066 Circuitos y Mediciones",
    description: "Laboratorio 066 de circuitos y mediciones.",
    location: "Piso 2, sector A (11-C-12).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab066Circuitosmediciones.jpg"
  },
  {
    id: 75,
    name: "11-C-11 Mantenimiento de Laboratorios",
    description: "Área de mantenimiento de laboratorios.",
    location: "Piso 2, sector A (11-C-11).",
    category: "Servicios",
    floor: "Piso 2",
    image: "images/Piso 2/11c11Mantenimiento.jpg"
  },
  {
    id: 76,
    name: "11-C-10 Laboratorio 065",
    description: "Laboratorio 065.",
    location: "Piso 2, sector A (11-C-10).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab11c10-065.jpg"
  },
  {
    id: 77,
    name: "11-C-9 Lab. 132 (Puerta 1)",
    description: "Laboratorio 132 — acceso 1.",
    location: "Piso 2, sector A (11-C-9).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab11c9-132.jpg"
  },
  {
    id: 78,
    name: "11-C-8 Lab. 132 (Puerta 2)",
    description: "Laboratorio 132 — acceso 2.",
    location: "Piso 2, sector A (11-C-8).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab11c8-132.jpg"
  },

  // --- PISO 2 (sector B) ---
  // (id 6 cubre el Cafetín)
  {
    id: 79,
    name: "12-C-1 Investigaciones Microbiológicas",
    description: "Laboratorio de investigaciones microbiológicas.",
    location: "Piso 2, sector B (12-C-1).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab12c1InvestigaMicrobio.jpg"
  },
  {
    id: 80,
    name: "12-C-2 Ind. de la Leche (Puerta 1)",
    description: "Industria de la Leche — acceso 1.",
    location: "Piso 2, sector B (12-C-2).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/12c2Puerta1.jpg"
  },
  {
    id: 81,
    name: "12-C-3 Ind. de la Leche (Puerta 2)",
    description: "Industria de la Leche — acceso 2.",
    location: "Piso 2, sector B (12-C-3).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab12c3Industriasleche.jpg"
  },
  {
    id: 82,
    name: "12-C-4 Entomología",
    description: "Laboratorio de entomología.",
    location: "Piso 2, sector B (12-C-4).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab12c4Entomologia.jpg"
  },
  {
    id: 83,
    name: "12-C-5 Investigación en Termofluido",
    description: "Laboratorio de investigación en termofluido.",
    location: "Piso 2, sector B (12-C-5).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab12c5Termofluido.jpg"
  },
  {
    id: 84,
    name: "12-C-7 Genética (Puerta 2)",
    description: "Laboratorio de genética — acceso 2.",
    location: "Piso 2, sector B (12-C-7).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/12c7Puerta2.jpg"
  },
  {
    id: 85,
    name: "12-C-8 Genética (Puerta 1)",
    description: "Laboratorio de genética — acceso 1.",
    location: "Piso 2, sector B (12-C-8).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab12c9Genetica.jpg"
  },
  {
    id: 87,
    name: "12-C-10 Instrumentación Biológica",
    description: "Laboratorio de instrumentación biológica.",
    location: "Piso 2, sector B (12-C-10).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab12c10InstrumentacionBio.jpg"
  },
  {
    id: 88,
    name: "12-C-11 Aula 5C (Primera puerta)",
    description: "Aula 5C — primera puerta.",
    location: "Piso 2, sector B (12-C-11).",
    category: "Académico",
    floor: "Piso 2",
    image: "images/Piso 2/12c11Aula05C.jpg"
  },
  {
    id: 89,
    name: "12-C-12 Aula 5C (Segunda puerta)",
    description: "Aula 5C — segunda puerta.",
    location: "Piso 2, sector B (12-C-12).",
    category: "Académico",
    floor: "Piso 2",
    image: "images/Piso 2/12c12Puerta2.jpg"
  },
  {
    id: 90,
    name: "12-C-13",
    description: "Aula/Laboratorio identificado como 12-C-13.",
    location: "Piso 2, sector B (12-C-13).",
    category: "Académico",
    floor: "Piso 2",
    image: "images/Piso 2/12c13.jpg"
  },
  {
    id: 91,
    name: "12-C-24 Investigaciones Genéticas",
    description: "Laboratorio de investigaciones genéticas.",
    location: "Piso 2, sector B (12-C-24).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab12c24investiGeneticas.jpg"
  },
  {
    id: 92,
    name: "12-C-23 Lab. 083 Bioquímica (Puerta 1)",
    description: "Laboratorio 083 de bioquímica — acceso 1.",
    location: "Piso 2, sector B (12-C-23).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/12c23Puerta1.jpg"
  },
  {
    id: 93,
    name: "12-C-22 Lab. 083 Bioquímica (Puerta 2)",
    description: "Laboratorio 083 de bioquímica — acceso 2.",
    location: "Piso 2, sector B (12-C-22).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab12c22Bioquimica083.jpg"
  },
  {
    id: 94,
    name: "12-C-20 Aula 07C",
    description: "Aula 07C.",
    location: "Piso 2, sector B (12-C-20).",
    category: "Académico",
    floor: "Piso 2",
    image: "images/Piso 2/12c20Aula07C.jpg"
  },
  {
    id: 96,
    name: "12-C-19 Lab. 119 Ing. de Métodos (Puerta 1)",
    description: "Laboratorio 119 de ingeniería de métodos — acceso 2.",
    location: "Piso 2, sector B (12-C-19).",
    category: "Laboratorios",
    floor: "Piso 2",
    image: "images/Piso 2/lab12c19Ingmetodos.jpg"
  },
  {
    id: 97,
    name: "12-C-17 Aula 06C",
    description: "Aula 06C.",
    location: "Piso 2, sector B (12-C-17).",
    category: "Académico",
    floor: "Piso 2",
    image: "images/Piso 2/12c17Aula06C.jpg"
  },
  {
    id: 98,
    name: "12-C-16 Sanitario de Damas (P2B)",
    description: "Baños de damas del piso 2 (sector B).",
    location: "Piso 2, sector B (12-C-16).",
    category: "Servicios",
    floor: "Piso 2",
    image: "images/Piso 2/12c16.jpg"
  },
  {
    id: 99,
    name: "12-C-15 Cuarto de Limpieza (P2B)",
    description: "Cuarto de limpieza del piso 2 (sector B).",
    location: "Piso 2, sector B (12-C-15).",
    category: "Servicios",
    floor: "Piso 2",
    image: "images/Piso 2/12c15mantenimiento.jpg"
  },
  {
    id: 100,
    name: "12-C-14 Sanitario de Hombres (P2B)",
    description: "Baños de hombres del piso 2 (sector B).",
    location: "Piso 2, sector B (12-C-14).",
    category: "Servicios",
    floor: "Piso 2",
    image: "images/Piso 2/12c14Bathmen.jpg"
  },

  // --- PISO 3 (sector B) — adiciones que faltaban ---
  {
    id: 101,
    name: "12-D-26",
    description: "Aula/Laboratorio identificado como 12-D-26.",
    location: "Piso 3, sector B (12-D-26).",
    category: "Académico",
    floor: "Piso 3",
    image: "images/Piso 3/12d26.jpg"
  },
  {
    id: 102,
    name: "12-D-27",
    description: "Aula/Laboratorio identificado como 12-D-27.",
    location: "Piso 3, sector B (12-D-27).",
    category: "Académico",
    floor: "Piso 3",
    image: "images/Piso 3/12d27.jpg"
  },
  {
    id: 103,
    name: "12-D-22",
    description: "Aula/Laboratorio identificado como 12-D-22.",
    location: "Piso 3, sector B (12-D-22).",
    category: "Académico",
    floor: "Piso 3",
    image: "images/Piso 3/12d22.jpg"
  },
  {
    id: 104,
    name: "12-D-23 Botánica Agrícola",
    description: "Laboratorio de botánica agrícola.",
    location: "Piso 3, sector B (12-D-23).",
    category: "Laboratorios",
    floor: "Piso 3",
    image: "images/Piso 3/12d23.jpg"
  },
  {
    id: 105,
    name: "12-D-8",
    description: "Aula/Laboratorio identificado como 12-D-8.",
    location: "Piso 3, sector B (12-D-8).",
    category: "Académico",
    floor: "Piso 3",
    image: "images/Piso 3/12d8.jpg"
  },
  {
    id: 106,
    name: "12-D-10 Microbiología General",
    description: "Laboratorio de microbiología general.",
    location: "Piso 3, sector B (12-D-10).",
    category: "Laboratorios",
    floor: "Piso 3",
    image: "images/Piso 3/12d10microbio.jpg"
  },
  {
    id: 107,
    name: "12-D-4",
    description: "Aula/Laboratorio identificado como 12-D-4.",
    location: "Piso 3, sector B (12-D-4).",
    category: "Académico",
    floor: "Piso 3",
    image: "images/Piso 3/12d4.jpg"
  },
  {
    id: 108,
    name: "12-D-16",
    description: "Aula/Laboratorio identificado como 12-D-16.",
    location: "Piso 3, sector B (12-D-16).",
    category: "Académico",
    floor: "Piso 3",
    image: "images/Piso 3/12d16.jpg"
  },
  {
    id: 109,
    name: "12-D-13 Fitopatología (Puerta 2)",
    description: "Fitopatología — acceso 2.",
    location: "Piso 3, sector B (12-D-13).",
    category: "Laboratorios",
    floor: "Piso 3",
    image: "images/Piso 3/12d13fitopologia.jpg"
  }
];

// DOM elements
const locationsContainer = document.getElementById('locations-container');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const locationDetailsPanel = document.getElementById('location-details'); // This is the fixed panel for desktop
const filterButtons = document.querySelectorAll('.filter-btn'); // Get all filter buttons

// New DOM elements for floor dropdown
const floorDropdownBtn = document.getElementById('floorDropdownBtn');
const floorDropdownMenu = document.getElementById('floorDropdownMenu');

let activeDetailCard = null; // To keep track of the currently open detail card

function displayLocations(locationsToDisplay = locations) {
  locationsContainer.innerHTML = '';
  
  if (locationsToDisplay.length === 0) {
    locationsContainer.innerHTML = '<p class="text-gray-600 text-center">No se encontraron ubicaciones para esta categoría.</p>';
    return;
  }

  locationsToDisplay.forEach(location => {
    const locationCard = document.createElement('div');
    locationCard.className = 'bg-white p-5 rounded-lg shadow cursor-pointer hover:shadow-md transition-all duration-300 hover:bg-gray-50 hover:border-l-4 hover:border-indigo-400';
    locationCard.innerHTML = `
      <h3 class="font-semibold text-lg text-gray-800">${location.name}</h3>
      <p class="text-gray-600 line-clamp-2">${location.description}</p>
    `;
    
    locationCard.addEventListener('click', () => toggleLocationDetails(location, locationCard));
    locationsContainer.appendChild(locationCard);
  });
}

// Toggle location details (show/hide)
function toggleLocationDetails(location, clickedCard) {
  if (activeDetailCard && activeDetailCard.previousElementSibling === clickedCard) {
    activeDetailCard.remove();
    activeDetailCard = null;
    return;
  }

  // Remove any previously active detail card
  if (activeDetailCard) {
    activeDetailCard.remove();
    activeDetailCard = null;
  }
  // Create the detail card dynamically
  const detailCard = document.createElement('div');
  detailCard.className = 'location-detail-card mt-4 bg-white p-6 rounded-lg shadow-md'; // Add a specific class for styling
  detailCard.innerHTML = `
    <h3 class="text-xl font-semibold mb-2">${location.name}</h3>
    <p class="text-gray-600 mb-4">${location.description}</p>
    <div class="flex items-center text-gray-500 mb-4">
      <span>${location.location}</span>
    </div>
    <img src="${location.image}" class="w-full h-auto rounded-lg" alt="Imagen de la ubicación" />
  `;
  
  clickedCard.parentNode.insertBefore(detailCard, clickedCard.nextSibling);
  activeDetailCard = detailCard;
  // Scroll to the newly opened detail card for better UX on mobile
  detailCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // For desktop, still show in the fixed panel
  if (window.innerWidth >= 1024) { // Tailwind's 'lg' breakpoint
    locationDetailsPanel.classList.add('hidden'); 
  } else {
    locationDetailsPanel.classList.add('hidden'); // Hide the fixed panel on mobile
  }
}

// Search functionality
function searchLocations() {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm.trim() === '') {
    displayLocations();
    // Hide any open detail card when search is cleared
    if (activeDetailCard) {
      activeDetailCard.remove();
      activeDetailCard = null;
    }
    return;
  }
  
  const filtered = locations.filter(location => 
    location.name.toLowerCase().includes(searchTerm) || 
    location.description.toLowerCase().includes(searchTerm)
  );
  
  displayLocations(filtered);
  // Hide any open detail card when search results change
  if (activeDetailCard) {
    activeDetailCard.remove();
    activeDetailCard = null;
  }
  // Hide fixed panel on desktop when search results change
  if (window.innerWidth >= 1024) {
    locationDetailsPanel.classList.add('hidden');
  }
}

// Filter functionality
function filterLocations(type, value) {
  let filtered = [];
  if (value === 'all') {
    filtered = locations;
  } else if (type === 'category') {
    filtered = locations.filter(location => 
      location.category === value
    );
  } else if (type === 'floor') {
    filtered = locations.filter(location => 
      location.floor.toLowerCase().includes(value.toLowerCase())
    );
  }
  
  displayLocations(filtered);
  // Hide any open detail card when filter changes
  if (activeDetailCard) {
    activeDetailCard.remove();
    activeDetailCard = null;
  }
  // Clear search input when filter is applied
  searchInput.value = '';

  // Update active state for category buttons
  filterButtons.forEach(btn => {
    btn.classList.remove('bg-indigo-600', 'text-white', 'active-filter');
    btn.classList.add('bg-gray-200', 'text-gray-800');
  });

  // Set active state for the clicked category button
  if (type === 'category' || type === 'all') {
    const activeButton = document.querySelector(`.filter-btn[data-filter="${value}"]`);
    if (activeButton) {
      activeButton.classList.remove('bg-gray-200', 'text-gray-800');
      activeButton.classList.add('bg-indigo-600', 'text-white', 'active-filter');
    }
  }
  // Reset floor dropdown button style
  floorDropdownBtn.classList.remove('bg-indigo-600', 'text-white');
  floorDropdownBtn.classList.add('bg-gray-200', 'text-gray-800');

  // If filtering by floor, set floor dropdown button style
  if (type === 'floor') {
    floorDropdownBtn.classList.remove('bg-gray-200', 'text-gray-800');
    floorDropdownBtn.classList.add('bg-indigo-600', 'text-white');
  }
}

// Populate floor dropdown
function populateFloorDropdown() {
  const floors = new Set();
  locations.forEach(location => {
    // Extract main floor number if range is given (e.g., "Planta baja - 3er piso" -> "Planta baja")
    const mainFloor = location.floor.split('-')[0].trim();
    if (mainFloor) {
      floors.add(mainFloor);
    }
  });

  const sortedFloors = Array.from(floors).sort((a, b) => {
    // Simple sorting for common floor names
    if (a === "Planta Baja") return -1;
    if (b === "Planta Baja") return 1;
    return a.localeCompare(b);
  });

  const dropdownContent = floorDropdownMenu.querySelector('div');
  dropdownContent.innerHTML = ''; // Clear existing options

  // Add "All Floors" option
  const allFloorsOption = document.createElement('a');
  allFloorsOption.href = "#";
  allFloorsOption.className = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900";
  allFloorsOption.textContent = "Todos los pisos";
  allFloorsOption.addEventListener('click', (e) => {
    e.preventDefault();
    filterLocations('all', 'all'); // Filter all locations
    floorDropdownMenu.classList.add('hidden');
  });
  dropdownContent.appendChild(allFloorsOption);

  sortedFloors.forEach(floor => {
    const option = document.createElement('a');
    option.href = "#";
    option.className = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900";
    option.textContent = floor;
    option.addEventListener('click', (e) => {
      e.preventDefault();
      filterLocations('floor', floor);
      floorDropdownMenu.classList.add('hidden');
    });
    dropdownContent.appendChild(option);
  });
}

// Event listeners
searchButton.addEventListener('click', searchLocations);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') searchLocations();
});

// Add event listeners for category filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterCategory = button.dataset.filter;
    filterLocations('category', filterCategory);
    // Hide floor dropdown if open
    floorDropdownMenu.classList.add('hidden');
  });
});

// Toggle floor dropdown visibility
floorDropdownBtn.addEventListener('click', () => {
  floorDropdownMenu.classList.toggle('hidden');
});

// Close dropdown if clicked outside
window.addEventListener('click', (event) => {
  if (!floorDropdownBtn.contains(event.target) && !floorDropdownMenu.contains(event.target)) {
    floorDropdownMenu.classList.add('hidden');
  }
});


// Initialize
filterLocations('all', 'all'); 
// Select "Todas" by default
populateFloorDropdown(); // Populate the floor dropdown on load

// Handle window resize to switch between mobile/desktop view
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    // If resizing to desktop, ensure the fixed panel is visible and dynamic card is hidden
    if (activeDetailCard) {
      activeDetailCard.remove();
      activeDetailCard = null;
    }
    // If a location was previously selected, show its details in the fixed panel
    // (This part would require storing the last selected location, which is not implemented here for simplicity)
    // locationDetailsPanel.classList.remove('hidden'); // Re-enable if fixed panel is used
  } else {
    // If resizing to mobile, hide the fixed panel
    locationDetailsPanel.classList.add('hidden');
  }
});
