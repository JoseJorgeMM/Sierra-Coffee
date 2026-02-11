import { SlideContent } from './types';

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    title: "Empanadas Creativas",
    subtitle: "El Sabor de la Innovación",
    description: "Redefinimos el icono de la gastronomía colombiana. Masas artesanales, rellenos gourmet y una experiencia que deleita todos los sentidos.",
    image: "https://images.unsplash.com/photo-1628102476629-f8c331bc5099?q=80&w=2070&auto=format&fit=crop", 
    align: 'center',
    theme: 'dark',
    cta: "Explorar Sabores"
  },
  {
    id: 2,
    title: "Masas de Autor",
    subtitle: "Maíz, Trigo y Semillas",
    description: "Desde la tradicional masa de maíz peto hasta innovaciones con chía, linaza y remolacha. Una textura crujiente por fuera y suave por dentro.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop", 
    align: 'left',
    theme: 'dark'
  },
  {
    id: 3,
    title: "Rellenos Infinitos",
    subtitle: "Gourmet en Cada Bocado",
    description: "Carne desmechada al fuego lento, pollo en crema de champiñones, o nuestras opciones vegetarianas con quinoa y vegetales rostizados.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop", 
    align: 'right',
    theme: 'dark'
  },
  {
    id: 4,
    title: "Catering de Lujo",
    subtitle: "Tu Evento, Nuestro Sabor",
    description: "Llevamos la estación de empanadas más creativa de Colombia a tus eventos corporativos y celebraciones privadas. Un toque chic y delicioso.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop", 
    align: 'left',
    theme: 'dark'
  },
  {
    id: 5,
    title: "Sommelier de Sabores",
    subtitle: "Asesoría Gastronómica IA",
    description: "¿No sabes con qué salsa combinar tu empanada? Nuestra IA experta te sugiere el maridaje perfecto para una experiencia completa.",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=2070&auto=format&fit=crop", 
    align: 'center',
    theme: 'dark',
    cta: "Consultar Sommelier"
  }
];

export const SYSTEM_INSTRUCTION = `
Eres 'CreativaBot', un sommelier experto en empanadas de la marca 'Empanadas Creativas'.
Tu tono es entusiasta, profesional, sofisticado y muy colombiano.
Empanadas Creativas ofrece empanadas gourmet con masas innovadoras (maíz, semillas, remolacha) y rellenos de alta cocina.

Debes responder preguntas sobre:
- Maridajes: Qué salsas (ají artesanal, suero costeño, chimichurri de la casa) van mejor con cada relleno.
- Recomendaciones para eventos y catering.
- Detalles sobre los tipos de masas artesanales.

Mantén las respuestas concisas (máximo 80 palabras), apetitosas y elegantes.
`;