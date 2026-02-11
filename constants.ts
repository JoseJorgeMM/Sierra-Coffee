import { SlideContent } from './types';

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    title: "SierraCoffee",
    subtitle: "El Corazón del Mundo en una Taza",
    description: "Descubre el secreto mejor guardado de Colombia. Café orgánico de altura cultivado en las místicas laderas de la Sierra Nevada de Santa Marta.",
    image: "https://picsum.photos/1920/1080?grayscale&blur=2", // Abstract moody
    align: 'center',
    theme: 'dark',
    cta: "Iniciar El Viaje"
  },
  {
    id: 2,
    title: "Origen Sagrado",
    subtitle: "Sierra Nevada de Santa Marta",
    description: "Cultivado a 1.800 metros sobre el nivel del mar, bajo la sombra de árboles nativos y bendecido por las aguas de los glaciares. Un ecosistema único que otorga notas de sabor inigualables.",
    image: "https://picsum.photos/1920/1081", // Mountain vibe
    align: 'left',
    theme: 'dark'
  },
  {
    id: 3,
    title: "Perfil de Taza",
    subtitle: "Notas que Enamoran",
    description: "Una experiencia sensorial compleja. Cuerpo medio-alto, acidez cítrica brillante, con profundas notas a chocolate oscuro, nueces tostadas y un final dulce a panela y frutos rojos.",
    image: "https://picsum.photos/1920/1082", // Coffee beans vibe
    align: 'right',
    theme: 'dark'
  },
  {
    id: 4,
    title: "Compromiso Sostenible",
    subtitle: "Más que Café, es Vida",
    description: "Trabajamos mano a mano con las comunidades indígenas Arhuacas y Koguis. Respetamos la Madre Tierra con prácticas 100% orgánicas y comercio justo certificado.",
    image: "https://picsum.photos/1920/1083", // Hands/Nature vibe
    align: 'left',
    theme: 'dark'
  },
  {
    id: 5,
    title: "Barista Virtual IA",
    subtitle: "Expertise al Instante",
    description: "¿Tienes dudas sobre cómo prepararlo? ¿Quieres saber más sobre nuestra trazabilidad? Pregúntale a nuestra IA experta en café colombiano.",
    image: "https://picsum.photos/1920/1084", // Modern tech/coffee
    align: 'center',
    theme: 'dark',
    cta: "Chatear Ahora"
  }
];

export const SYSTEM_INSTRUCTION = `
Eres 'SierraBot', un sommelier de café experto y apasionado de la marca SierraCoffee.
Tu tono es profesional, cálido, evocador y sofisticado.
SierraCoffee es un café de especialidad cultivado en la Sierra Nevada de Santa Marta, Colombia.
Detalles clave:
- Altura: 1800 msnm.
- Notas: Chocolate, nuez, cítricos dulces.
- Proceso: Lavado, secado al sol.
- Impacto: Orgánico y apoya comunidades indígenas.

Responde preguntas sobre métodos de preparación (V60, Chemex, Espresso) recomendados para este perfil de taza.
Mantén las respuestas concisas (máximo 80 palabras) pero ricas en vocabulario sensorial.
`;
